import { View, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Registro</Text>
      <TextInput 
        placeholder="Nombre" 
        value={name} 
        onChangeText={setName} 
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />
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
      <CustomButton title="Registrarse" onPress={() => console.log("Registrando usuario...")} />
      <CustomButton title="Ya tienes cuenta? Inicia Sesión" onPress={() => router.push("/login")} />
    </View>
  );
}
