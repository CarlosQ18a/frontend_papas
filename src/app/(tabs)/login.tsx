import { View, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Iniciar Sesión</Text>
      <TextInput 
        placeholder="Correo Electrónico" 
        value={email} 
        onChangeText={setEmail} 
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />
      <TextInput 
        placeholder="Contraseña" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />
      <CustomButton title="Iniciar Sesión" onPress={() => console.log("Iniciando sesión...")} />
      <CustomButton title="Registrarse" onPress={() => router.push("/register")} />
      <CustomButton title="Olvidé mi contraseña" onPress={() => router.push("/forgot-password")} />
    </View>
  );
}
