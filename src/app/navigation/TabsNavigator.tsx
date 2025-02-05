// src/app/navigation/TabsNavigator.tsx

import { Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function TabsNavigator() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Inicio" }} />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
      <Tabs.Screen name="register" options={{ title: "Registro" }} />
    </Tabs>
  );
}
