import React from "react";
import { Center, NativeBaseProvider, VStack, } from "native-base";
import SettingsSwitch from "./components/SettingsSwitch";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} >
        <VStack space={5} alignItems="center">
          <SettingsSwitch switchName={'Anonym Posts:'} isAnonym={false} />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
