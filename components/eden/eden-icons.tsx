type IconProps = { className?: string };

export function EdenIconPerson({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M13 14C13 11.2386 10.7614 9 8 9C5.23858 9 3 11.2386 3 14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EdenIconTruck({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M1.5 3H10V10H1.5V3Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M10 5.5H12.5L14.5 7.5V10H10V5.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="11.5" r="1" fill="currentColor" />
      <circle cx="12" cy="11.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function EdenIconShield({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 1.5L13 3.5V7.5C13 10.5 10.8 12.8 8 14C5.2 12.8 3 10.5 3 7.5V3.5L8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M6 8L7.5 9.5L10.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function EdenIconArrow({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10.7226 14.4531C10.8496 14.4531 10.9619 14.4043 11.0693 14.3066L15.2881 10.0781C15.3955 9.98047 15.4492 9.8584 15.4492 9.72656C15.4492 9.59472 15.3955 9.47266 15.2881 9.37012L11.0938 5.1709C10.9668 5.04395 10.8496 5 10.7226 5C10.459 5 10.2539 5.19531 10.2539 5.45898C10.2539 5.58594 10.2979 5.70801 10.3857 5.7959L12.0947 7.5293L14.4776 9.72656L12.0947 11.9238L10.3857 13.6524C10.3027 13.7402 10.2539 13.8672 10.2539 13.9941C10.2539 14.2578 10.459 14.4531 10.7226 14.4531ZM4.21875 10.2002H12.5684L14.4824 10.0928C14.707 10.0781 14.8584 9.94141 14.8584 9.72656C14.8584 9.50684 14.707 9.37012 14.4873 9.35547L12.5684 9.25293H4.21875C3.94531 9.25293 3.75 9.44824 3.75 9.72656C3.75 10 3.94531 10.2002 4.21875 10.2002Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function EdenIconProvider({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M6.5 4.5a3.5 3.5 0 1 1 7 0v1.5M4 17v-1.75c0-2.1 1.9-3.75 4.25-3.75h3.5C14.1 11.5 16 13.15 16 15.25V17"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="4.5" r="2.25" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function EdenIconMedication({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="5" y="7" width="10" height="6" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 7V5.5a2 2 0 0 1 4 0V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M10 9.5v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function EdenIconPricing({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M6.5 10.5 8.75 12.75 13.5 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function EdenIconUsFlag({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="3" y="4" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3 7.5h14M3 10.5h14M3 13.5h14" stroke="currentColor" strokeWidth="0.8" />
      <rect x="3" y="4" width="6" height="6.5" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}

export function EdenIconPackage({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10 3.5 16.5 7v6L10 16.5 3.5 13V7L10 3.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M10 3.5v13M3.5 7 10 10.5 16.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="14.5" cy="14.5" r="2.25" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function EdenIconShieldOff({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10 2.5 15.5 4.75V9.25c0 3.1-2.2 5.65-5.5 6.75-3.3-1.1-5.5-3.65-5.5-6.75V4.75L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M8 8.5 12 12.5M12 8.5 8 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function EdenIconTrendDown({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M4.5 7.5 9 12l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 3v9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function EdenMarqueeIcon({ type, className }: IconProps & { type: string }) {
  if (type === "truck") return <EdenIconTruck className={className} />;
  if (type === "shield") return <EdenIconShield className={className} />;
  return <EdenIconPerson className={className} />;
}
