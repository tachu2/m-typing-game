import { SpacingMap } from "../../components/const/spacing";
import HStack from "../../components/layout/stack/hstack";

export default function Home() {
  return (
    <HStack space={SpacingMap.XS}>
      <h1>test</h1>
      <h1>test2</h1>
      <h1>test2</h1>
    </HStack>
  );
}
