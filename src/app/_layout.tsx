import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Carga la navegación de pestañas */}
      <Stack.Screen name="(tabs)/_layout" options={{ headerShown: false }} />

      {/* Pantallas fuera de las pestañas */}
      <Stack.Screen name="forgot-password" options={{ title: "Recuperar Contraseña" }} />
    </Stack>
  );
}
