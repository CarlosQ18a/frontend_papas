import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "../components/CustomButton";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Imagen de portada */}
        <Image 
         source={require("../assets/images/papas.png")}

          style={styles.image}
          resizeMode="cover"
        />

        {/* Texto de bienvenida */}
        <Text style={styles.title}>
          Bienvenido a Clasificación de Papa
        </Text>
        <Text style={styles.subtitle}>
          Tu herramienta ideal para contar y clasificar papas. ¡Vamos a empezar!
        </Text>

        {/* Botones */}
        <CustomButton title="Ir a Login" onPress={() => router.push("/login")} />
        <CustomButton title="Ir a Registro" onPress={() => router.push("/register")} />
        <CustomButton title="Olvidé mi contraseña" onPress={() => router.push("/forgot-password")} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  scrollContainer: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
});
