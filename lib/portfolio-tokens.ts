export const portfolioColorTokens = [
  { name: "Canvas", value: "#101A2D", role: "Primary page background" },
  { name: "Surface", value: "#182642", role: "Raised content and form surfaces" },
  { name: "Surface alt", value: "#132038", role: "Navigation and quiet contrast" },
  { name: "Lavender", value: "#BE9CFF", role: "Accent, active state, and emphasis" },
  { name: "Lavender light", value: "#D3BCFF", role: "Hover and secondary emphasis" },
  { name: "Cream", value: "#FFF7EA", role: "Primary reading color" },
  { name: "Mist", value: "#D2D9E4", role: "Supportive copy and metadata" },
] as const;

export const portfolioTypeTokens = [
  { name: "Display and interface", family: "Manrope", weights: "400, 500, 600, 700", use: "Headlines, navigation, labels, and controls" },
  { name: "Reading", family: "Noto Serif", weights: "400, 500, 600", use: "Body copy and longer explanations" },
] as const;

export const portfolioLayoutTokens = [
  { name: "Content width", value: "1180px", role: "Shared desktop reading measure" },
  { name: "Corner radius", value: "12px", role: "Fields and tools only" },
  { name: "Line", value: "Cream at 14%", role: "Dividers and component boundaries" },
] as const;
