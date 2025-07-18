import { SpacingMap, SpacingType } from "../../const/spacing";

type HStackProps = {
  children: React.ReactNode;
  space?: SpacingType;
};

export default function HStack({
  children,
  space = SpacingMap.None,
}: HStackProps) {
  return <div className={`flex flex-row gap-${space}`}>{children}</div>;
}
