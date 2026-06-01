/** Protocol pathways — homepage cards; only Basis Metabolic is live at launch */

export type ProtocolStatus = "available" | "coming-soon";

export type ProtocolDefinition = {
  id: string;
  name: string;
  description: string;
  focusAreas: readonly string[];
  status: ProtocolStatus;
  statusLabel: string;
  /** Secondary page when live (e.g. GLP therapy detail) */
  href?: string;
};

export const PROTOCOLS: readonly ProtocolDefinition[] = [
  {
    id: "metabolic",
    name: "Basis Metabolic",
    description:
      "For weight management, appetite regulation, energy, and long-term metabolic health.",
    focusAreas: [
      "Weight management",
      "Appetite regulation",
      "Metabolic health",
      "Energy",
      "Cardiometabolic improvement",
    ],
    status: "available",
    statusLabel: "Available first",
    href: "/glp-one",
  },
  {
    id: "longevity",
    name: "Basis Longevity",
    description:
      "For healthy aging, vitality, resilience, and long-term optimization.",
    focusAreas: [
      "Healthy aging",
      "Vitality",
      "Resilience",
      "Preventive optimization",
    ],
    status: "coming-soon",
    statusLabel: "Coming soon",
  },
  {
    id: "recovery",
    name: "Basis Recovery",
    description:
      "For recovery, connective tissue support, inflammation support, and physical resilience.",
    focusAreas: [
      "Recovery",
      "Training support",
      "Connective tissue support",
      "Physical resilience",
    ],
    status: "coming-soon",
    statusLabel: "Coming soon",
  },
  {
    id: "performance",
    name: "Basis Performance",
    description:
      "For strength, training support, recovery, and performance optimization.",
    focusAreas: [
      "Strength",
      "Recovery",
      "Training support",
      "Performance optimization",
    ],
    status: "coming-soon",
    statusLabel: "Coming soon",
  },
  {
    id: "cognitive",
    name: "Basis Cognitive",
    description:
      "For focus, mental clarity, cognitive performance, and sustained mental energy.",
    focusAreas: [
      "Focus",
      "Clarity",
      "Mental energy",
      "Cognitive performance",
    ],
    status: "coming-soon",
    statusLabel: "Coming soon",
  },
] as const;

export function availableProtocols(): ProtocolDefinition[] {
  return PROTOCOLS.filter((p) => p.status === "available");
}

export function metabolicProtocol(): ProtocolDefinition {
  const protocol = PROTOCOLS.find((p) => p.id === "metabolic");
  if (!protocol) throw new Error("Basis Metabolic protocol not defined");
  return protocol;
}
