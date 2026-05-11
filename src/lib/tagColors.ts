export interface TagColor {
  bg: string;
  c: string;
  bd: string;
}

export const TAG_COLORS: Record<string, TagColor> = {
  "Premium":        { bg: "rgba(245,180,50,0.1)",  c: "#f5b432", bd: "rgba(245,180,50,0.2)"  },
  "Best Value":     { bg: "rgba(16,185,129,0.1)",  c: "#10b981", bd: "rgba(16,185,129,0.2)"  },
  "Budget Friendly":{ bg: "rgba(59,130,246,0.1)",  c: "#60a5fa", bd: "rgba(59,130,246,0.2)"  },
  "Touchscreen":    { bg: "rgba(168,85,247,0.1)",  c: "#a855f7", bd: "rgba(168,85,247,0.2)"  },
  "Graphics":       { bg: "rgba(239,68,68,0.1)",   c: "#ef4444", bd: "rgba(239,68,68,0.2)"   },
  "2-in-1":         { bg: "rgba(6,182,212,0.1)",   c: "#06b6d4", bd: "rgba(6,182,212,0.2)"   },
  "32GB RAM":       { bg: "rgba(245,180,50,0.1)",  c: "#f5b432", bd: "rgba(245,180,50,0.2)"  },
  "Latest Gen":     { bg: "rgba(16,185,129,0.1)",  c: "#10b981", bd: "rgba(16,185,129,0.2)"  },
  "Compact":        { bg: "rgba(129,140,248,0.1)", c: "#818cf8", bd: "rgba(129,140,248,0.2)" },
  "Popular":        { bg: "rgba(251,146,60,0.1)",  c: "#fb923c", bd: "rgba(251,146,60,0.2)"  },
};
