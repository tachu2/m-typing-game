import { SpacingMap, SpacingType } from "../../const/spacing";

type HStackProps = {
  children: React.ReactNode;
  space?: SpacingType;
};

const gapMap: Record<SpacingType, string> = {
  [SpacingMap.None]: "gap-0",
  [SpacingMap.XS]: "gap-2",
  [SpacingMap.S]: "gap-4",
  [SpacingMap.M]: "gap-8",
  [SpacingMap.L]: "gap-12",
  [SpacingMap.XL]: "gap-16",
  [SpacingMap.XXL]: "gap-20",
};

export default function HStack({
  children,
  space = SpacingMap.None,
}: HStackProps) {
  const gapClass = gapMap[space];
  return <div className={`flex flex-row ${gapClass}`}>{children}</div>;
}
