// Minimal static file server for the built PWAs, used only by Playwright's
// webServer during e2e runs. No external dependencies.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const PORT = 4400;

// Order matters: longest/most specific prefixes first.
const MOUNTS = [
  { prefix: "/app/", dir: path.join(repoRoot, "apps/customer/dist") },
  { prefix: "/driver/", dir: path.join(repoRoot, "apps/driver/dist") },
  { prefix: "/merchant/", dir: path.join(repoRoot, "apps/merchant/dist") },
  { prefix: "/admin/", dir: path.join(repoRoot, "apps/admin/dist") },
  { prefix: "/", dir: path.join(repoRoot, "apps/website/dist") },
];

const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function contentTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return CONTENT_TYPES[ext] || "application/octet-stream";
}

function resolveMount(pathname) {
  for (const mount of MOUNTS) {
    if (pathname.startsWith(mount.prefix)) return mount;
  }
  return null;
}

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, `http://localhost:${PORT}`).pathname);
  } catch {
    res.writeHead(400).end("Bad request");
    return;
  }

  const mount = resolveMount(pathname);
  if (!mount) {
    res.writeHead(404).end("Not found");
    return;
  }

  const relative = pathname.slice(mount.prefix.length);
  let filePath = path.join(mount.dir, relative);

  const serveFile = (fp) => {
    fs.readFile(fp, (err, data) => {
      if (err) {
        // SPA fallback: serve this mount's index.html for unknown paths.
        const indexPath = path.join(mount.dir, "index.html");
        fs.readFile(indexPath, (err2, indexData) => {
          if (err2) {
            res.writeHead(404).end("Not found");
            return;
          }
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.end(indexData);
        });
        return;
      }
      res.writeHead(200, { "Content-Type": contentTypeFor(fp) });
      res.end(data);
    });
  };

  if (pathname.endsWith("/")) {
    serveFile(path.join(filePath, "index.html"));
  } else {
    fs.stat(filePath, (err, stat) => {
      if (!err && stat.isDirectory()) {
        serveFile(path.join(filePath, "index.html"));
      } else {
        serveFile(filePath);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`e2e static server listening on http://localhost:${PORT}`);
});
