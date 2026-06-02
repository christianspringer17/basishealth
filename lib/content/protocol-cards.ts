export type ProtocolCard = {
  name: string;
  status: "available" | "coming-soon";
  statusLabel: string;
  description: string;
};

export const PROTOCOL_CARDS: readonly ProtocolCard[] = [
  {
    name: "Basis Metabolic",
    status: "available",
    statusLabel: "Available now",
    description:
      "Weight management, appetite regulation, energy, and long-term metabolic health.",
  },
  {
    name: "Hormone",
    status: "coming-soon",
    statusLabel: "Coming soon",
    description: "Hormone-focused protocols through provider-guided care.",
  },
  {
    name: "Longevity",
    status: "coming-soon",
    statusLabel: "Coming soon",
    description: "Lab-informed protocols for long-term health and resilience.",
  },
  {
    name: "Recovery",
    status: "coming-soon",
    statusLabel: "Coming soon",
    description: "Support for recovery, inflammation, and physical resilience.",
  },
  {
    name: "Performance",
    status: "coming-soon",
    statusLabel: "Coming soon",
    description: "Protocols for training support and optimization.",
  },
] as const;
