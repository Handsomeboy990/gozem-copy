import type { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="gz-empty" role="status">
      <p className="gz-empty__title">{title}</p>
      {description ? <p>{description}</p> : null}
      {action}
    </div>
  );
}
