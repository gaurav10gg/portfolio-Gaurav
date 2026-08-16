/* Small, stroke-matched icon set. All icons inherit currentColor. */

type IconProps = { size?: number; className?: string };

export function ArrowRight({ size = 13, className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M1.5 8h12" />
      <path d="M9.5 4 13.5 8l-4 4" />
    </svg>
  );
}

export function ArrowUpRight({ size = 12, className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4.5 11.5 11.5 4.5" />
      <path d="M5.5 4.5h6v6" />
    </svg>
  );
}

export function ArrowDown({ size = 12, className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M8 2.5v11" />
      <path d="M3.5 9.5 8 14l4.5-4.5" />
    </svg>
  );
}

export function ArrowUp({ size = 12, className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M8 13.5v-11" />
      <path d="M3.5 6.5 8 2l4.5 4.5" />
    </svg>
  );
}

export function Copy({ size = 12, className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <rect x="5.5" y="5.5" width="8" height="8" />
      <path d="M10.5 3.5h-8v8" />
    </svg>
  );
}

export function Check({ size = 12, className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="m3 8.5 3.5 3.5L13 4.5" />
    </svg>
  );
}

export function Burger({ open = false, size = 16 }: { open?: boolean; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {open ? (
        <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
      ) : (
        <>
          <path d="M2 4.5h12" />
          <path d="M2 8h12" />
          <path d="M2 11.5h12" />
        </>
      )}
    </svg>
  );
}
