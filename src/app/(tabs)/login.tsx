import { View, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulación de autenticación (puedes conectar esto con Firebase o tu backend)
    if (email === "admin@gmail.com" && password === "123456") {
      router.push("/home"); // Redirige a la pantalla de Inicio
    } else {
      alert("Credenciales incorrectas");
    }
  };

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
      <CustomButton title="Iniciar Sesión" onPress={handleLogin} />
      <CustomButton title="Registrarse" onPress={() => router.push("/register")} />
      <CustomButton title="Olvidé mi contraseña" onPress={() => router.push("/forgot-password")} />
    </View>
  );
}
