import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell, Card, Button, Input } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import "../components/admin-layout.css";

/** A-01: fake admin login, no OTP, no real auth (MOCKUP_SPEC.md 2.4). */
export function Login() {
  const { t } = useT();
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@gozem-copy.test");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <AppShell>
      <Card>
        <h1>{t("admin.login.title")}</h1>
        <p>{t("admin.login.subtitle")}</p>
        <form onSubmit={handleSubmit} noValidate>
          <Input
            label={t("admin.login.email")}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="username"
            required
          />
          <Input
            label={t("admin.login.password")}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            placeholder={t("admin.login.passwordPlaceholder")}
          />
          <p className="admin-login__notice">{t("admin.login.fakeNotice")}</p>
          <Button type="submit">{t("admin.login.submit")}</Button>
        </form>
      </Card>
    </AppShell>
  );
}
