import { SpacingMap, SpacingType } from "../../const/spacing";

type VStackProps = {
  children: React.ReactNode;
  space?: SpacingType;
};

export default function VStack({
  children,
  space = SpacingMap.None,
}: VStackProps) {
  return <div className={`flex flex-col gap-${space}`}>{children}</div>;
}
