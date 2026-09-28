import { useRef, type KeyboardEvent } from "react";

export interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  label: string;
}

/** Fixed-code OTP entry: static digits, no network call (see spec section 6). */
export function OtpInput({ length = 6, value, onChange, label }: OtpInputProps) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const digits = value.padEnd(length, " ").split("").slice(0, length);

  function setDigit(index: number, char: string) {
    const next = digits.slice();
    next[index] = char || " ";
    onChange(next.join("").trimEnd());
    if (char && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !digits[index].trim() && index > 0) {
      refs.current[index - 1]?.focus();
    }
  }

  return (
    <div className="gz-otp" role="group" aria-label={label}>
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            refs.current[index] = el;
          }}
          className="gz-otp__digit"
          inputMode="numeric"
          maxLength={1}
          value={digit.trim()}
          onChange={(e) => setDigit(index, e.target.value.replace(/[^0-9]/g, ""))}
          onKeyDown={(e) => handleKeyDown(index, e)}
          aria-label={`${label} ${index + 1}/${length}`}
        />
      ))}
    </div>
  );
}
