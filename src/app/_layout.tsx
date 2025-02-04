import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)/_layout" options={{ headerShown: false }} />
      <Stack.Screen name="forgot-password" options={{ title: "Recuperar Contraseña" }} />
    </Stack>
  );
}
