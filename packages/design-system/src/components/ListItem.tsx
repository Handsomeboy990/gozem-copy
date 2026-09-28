import type { ReactNode } from "react";

export interface ListItemProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  onClick?: () => void;
  as?: "div" | "button";
}

export function ListItem({ title, subtitle, icon, onClick, as = "div" }: ListItemProps) {
  const Tag = onClick ? "button" : as;
  return (
    <Tag className="gz-list-item" type={Tag === "button" ? "button" : undefined} onClick={onClick}>
      {icon ? <span className="gz-list-item__icon">{icon}</span> : null}
      <span className="gz-list-item__body">
        <p className="gz-list-item__title">{title}</p>
        {subtitle ? <p className="gz-list-item__subtitle">{subtitle}</p> : null}
      </span>
    </Tag>
  );
}
