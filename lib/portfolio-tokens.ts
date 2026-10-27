export const portfolioColorValues = {
  canvas: "#101A2D",
  surface: "#182642",
  surfaceAlt: "#132038",
  lavender: "#BE9CFF",
  lavenderLight: "#D3BCFF",
  cream: "#FFF7EA",
  mist: "#D2D9E4",
} as const;

export const portfolioColorTokens = [
  { name: "Canvas", value: portfolioColorValues.canvas, role: "Primary page background" },
  { name: "Surface", value: portfolioColorValues.surface, role: "Raised content and form surfaces" },
  { name: "Surface alt", value: portfolioColorValues.surfaceAlt, role: "Navigation and quiet contrast" },
  { name: "Lavender", value: portfolioColorValues.lavender, role: "Accent, active state, and emphasis" },
  { name: "Lavender light", value: portfolioColorValues.lavenderLight, role: "Hover and secondary emphasis" },
  { name: "Cream", value: portfolioColorValues.cream, role: "Primary reading color" },
  { name: "Mist", value: portfolioColorValues.mist, role: "Supportive copy and metadata" },
] as const;

export const portfolioTypeTokens = [
  { name: "Display and interface", family: "Manrope", weights: "400, 500, 600, 700", use: "Headlines, navigation, labels, and controls" },
  { name: "Reading", family: "Noto Serif", weights: "400, 500, 600", use: "Body copy and longer explanations" },
] as const;

export const portfolioLayoutValues = {
  contentWidth: "1180px",
  controlRadius: "12px",
  divider: "Cream at 14%",
} as const;

export const portfolioLayoutTokens = [
  { name: "Content width", value: portfolioLayoutValues.contentWidth, role: "Shared desktop reading measure" },
  { name: "Corner radius", value: portfolioLayoutValues.controlRadius, role: "Fields and tools only" },
  { name: "Line", value: portfolioLayoutValues.divider, role: "Dividers and component boundaries" },
] as const;
