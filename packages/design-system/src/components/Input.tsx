import { useId, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, id, ...rest }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  return (
    <div className="gz-field">
      <label className="gz-field__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className="gz-field__input"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error ? (
        <span id={errorId} className="gz-field__error" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
