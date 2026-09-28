import type { ReactNode } from "react";

export interface TopBarProps {
  title: string;
  leading?: ReactNode;
  trailing?: ReactNode;
}

export function TopBar({ title, leading, trailing }: TopBarProps) {
  return (
    <header className="gz-topbar">
      {leading}
      <h1 className="gz-topbar__title">{title}</h1>
      <div style={{ marginLeft: "auto" }}>{trailing}</div>
    </header>
  );
}
