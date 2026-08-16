type IconProps = { size?: number; className?: string };

export function ArrowRight({ size = 13, className = '' }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M1.5 8h12" />
      <path d="M9.5 4 13.5 8l-4 4" />
    </svg>
  );
}

export function ArrowUpRight({ size = 12, className = '' }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5" />
      <path d="M5.5 4.5h6v6" />
    </svg>
  );
}

export function Close({ size = 12, className = '' }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
    </svg>
  );
}

export function Burger({ open = false, size = 16 }: { open?: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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
