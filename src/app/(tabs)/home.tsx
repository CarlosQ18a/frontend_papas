import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      
      <Image 
  source={require("../assets/images/papas.png")}

  style={styles.image} 
/>

      
      <Text style={styles.subtitle}>Clasificación de Papas</Text>
      
      <View style={styles.buttonContainer}>
        <CustomButton title="Pequeñas" onPress={() => console.log("Pequeñas")} />
        <CustomButton title="Medianas" onPress={() => console.log("Medianas")} />
        <CustomButton title="Grandes" onPress={() => console.log("Grandes")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: { fontSize: 18, marginVertical: 10 },
  image: { width: "90%", height: 150, marginVertical: 10 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-around", width: "100%" },
});
