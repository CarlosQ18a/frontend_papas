import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SmallPotatoesScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Papas Pequeñas</Text>
      <Image source={require("../assets/images/papas.png")} style={{ width: 300, height: 150 }} />

      <Text style={{ textAlign: "center", margin: 20 }}>
        La papa es un tubérculo andino versátil, con más de 4,000 variedades.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold" }}>EXISTENCIAS</Text>
      <Text style={{ fontSize: 24, backgroundColor: "green", color: "white", padding: 10, borderRadius: 5 }}>45</Text>

      <TouchableOpacity 
        style={{ backgroundColor: "#4CAF50", padding: 10, marginTop: 20, borderRadius: 5 }} 
        onPress={() => router.back()}
      >
        <Text style={{ color: "white" }}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}
