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

export function EdenMarqueeIcon({ type, className }: IconProps & { type: string }) {
  if (type === "truck") return <EdenIconTruck className={className} />;
  if (type === "shield") return <EdenIconShield className={className} />;
  return <EdenIconPerson className={className} />;
}
