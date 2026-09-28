import type { ReactNode } from "react";
import { Banner } from "./Banner";
import { LanguageSwitch } from "./LanguageSwitch";

export interface AppShellProps {
  children: ReactNode;
  topBar?: ReactNode;
  bottomNav?: ReactNode;
}

/** Root layout: Banner + LanguageSwitch + children, mobile-first, centered max-width on desktop. */
export function AppShell({ children, topBar, bottomNav }: AppShellProps) {
  return (
    <div className="gz-shell">
      <Banner />
      {topBar}
      <div style={{ position: "sticky", top: "var(--banner-height)", zIndex: 950, display: "flex", justifyContent: "flex-end", maxWidth: "var(--max-width-desktop)", margin: "0 auto", width: "100%", padding: "var(--space-2) var(--space-4) 0" }}>
        <LanguageSwitch />
      </div>
      <main className="gz-shell__content">{children}</main>
      {bottomNav}
    </div>
  );
}
