import { useRef, useState, type FormEvent } from "react";
import { AppShell, Button, Card, OtpInput, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { FIXED_OTP } from "@gozem/fake-data";
import { useNavigate } from "react-router-dom";

export function Otp() {
  const { t } = useT();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const groupRef = useRef<HTMLDivElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (code !== FIXED_OTP) {
      setError(t("driver.otp.error"));
      groupRef.current?.querySelector("input")?.focus();
      return;
    }
    setError("");
    navigate("/onboarding/documents");
  }

  return (
    <AppShell topBar={<TopBar title={t("driver.otp.title")} />}>
      <Card>
        <p>{t("driver.otp.description")}</p>
        <p>
          {t("common.otpFixedNotice")}: <strong>{FIXED_OTP}</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <div ref={groupRef}>
            <OtpInput label={t("driver.otp.label")} value={code} onChange={setCode} length={FIXED_OTP.length} />
          </div>
          {error ? (
            <p role="alert" className="gz-field__error">
              {error}
            </p>
          ) : null}
          <Button type="submit">{t("driver.otp.cta")}</Button>
        </form>
      </Card>
    </AppShell>
  );
}
