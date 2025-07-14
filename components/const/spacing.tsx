export const SpacingMap = {
  None: "0",
  XS: "2",
  S: "4",
  M: "8",
  L: "12",
  XL: "16",
  XXL: "20",
} as const;

export type SpacingType = (typeof SpacingMap)[keyof typeof SpacingMap];
