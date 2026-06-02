type IconProps = {
  className?: string;
};

export function InsulinSensitivityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="8" y="8" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 24c3-6 6-6 9 0s6 6 9 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MuscleMassIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 6 40 16v16L24 42 8 32V16z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19 30V18l5-3 5 3v12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HormonalResponseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 24 + Math.cos(rad) * 8;
        const y1 = 24 + Math.sin(rad) * 8;
        const x2 = 24 + Math.cos(rad) * 16;
        const y2 = 24 + Math.sin(rad) * 16;
        const cx = 24 + Math.cos(rad) * 19;
        const cy = 24 + Math.sin(rad) * 19;
        return (
          <g key={deg}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" />
            <circle cx={cx} cy={cy} r="2.5" stroke="currentColor" strokeWidth="1.5" />
          </g>
        );
      })}
    </svg>
  );
}

export function Vo2MaxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="22" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 24h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M24 24l4-4M24 24l4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="34"
        y="16"
        fill="currentColor"
        fontSize="9"
        fontFamily="var(--font-sans)"
        fontWeight="300"
      >
        2
      </text>
    </svg>
  );
}

export function BodyCompositionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 8c-4 0-7 2-9 5-2 3-2 7 0 10 2 3 5 5 9 5s7-2 9-5c2-3 2-7 0-10-2-3-5-5-9-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M15 34c2 4 6 6 9 6s7-2 9-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="24"
        y="27"
        fill="currentColor"
        fontSize="11"
        fontFamily="var(--font-sans)"
        fontWeight="300"
        textAnchor="middle"
      >
        %
      </text>
    </svg>
  );
}

export const METABOLIC_MARKER_ICONS = [
  InsulinSensitivityIcon,
  MuscleMassIcon,
  HormonalResponseIcon,
  Vo2MaxIcon,
  BodyCompositionIcon,
] as const;
