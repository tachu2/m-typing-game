import { SpacingMap } from "../../components/const/spacing";
import HStack from "../../components/layout/stack/hstack";
import VStack from "../../components/layout/stack/vstack";

export default function Home() {
  return (
    <>
      <HStack space={SpacingMap.XS}>
        <h1>テスト</h1>
        <h1>test2</h1>
        <h1>test2</h1>
      </HStack>
      <VStack space={SpacingMap.XL}>
        <h1>test2</h1>
        <h1>test3</h1>
      </VStack>
    </>
  );
}
