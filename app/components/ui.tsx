import type { ReactNode } from "react";
import { Icon } from "@/app/components/Icon";

/** The small uppercase capsule that opens every section. */
export function Pill({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-block rounded-full px-[14px] py-[7px] text-[11px] font-bold tracking-[1px] uppercase ${className}`}
    >
      {children}
    </span>
  );
}

/** The filled circle holding the play glyph inside "Watch Demo" buttons. */
export function PlayBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex size-[18px] shrink-0 items-center justify-center rounded-full ${className}`}
    >
      <Icon name="play_arrow" size={12} />
    </span>
  );
}

/** Centres content on the 1160px design grid. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-[1160px] px-6 ${className}`}>{children}</div>
  );
}
