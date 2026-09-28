import type { ReactNode } from "react";

export interface BottomNavItem {
  key: string;
  label: string;
  href: string;
  icon?: ReactNode;
  current?: boolean;
}

export interface BottomNavProps {
  items: BottomNavItem[];
  /** Render function so each app can supply its own router Link (no cross-app router import). */
  renderLink: (item: BottomNavItem, children: ReactNode) => ReactNode;
}

export function BottomNav({ items, renderLink }: BottomNavProps) {
  return (
    <nav className="gz-bottomnav" aria-label="Primary">
      <div className="gz-bottomnav__inner">
        {items.map((item) =>
          renderLink(
            item,
            <span
              key={item.key}
              className="gz-bottomnav__item"
              aria-current={item.current ? "page" : undefined}
              data-has-icon={item.icon ? "true" : undefined}
            >
              {item.icon}
              {item.label}
            </span>
          )
        )}
      </div>
    </nav>
  );
}
