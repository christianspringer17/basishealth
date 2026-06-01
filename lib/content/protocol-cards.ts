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
    name: "Recovery",
    status: "coming-soon",
    statusLabel: "Coming soon",
    description: "Structured support for recovery and physical resilience.",
  },
  {
    name: "Longevity",
    status: "coming-soon",
    statusLabel: "Coming soon",
    description: "Future protocols for vitality and long-term optimization.",
  },
  {
    name: "Performance",
    status: "coming-soon",
    statusLabel: "Coming soon",
    description: "Future protocols for training support and optimization.",
  },
] as const;
