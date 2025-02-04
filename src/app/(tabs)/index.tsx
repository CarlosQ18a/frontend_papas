// app/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>    "Bienvenido a Clasificación de Papa, tu herramienta ideal para contar y clasificar papas."</Text>
      <Text style={styles.title}> ¡Vamos a empezar!"</Text>

      <Button
        title="Iniciar Sesión"
        onPress={() => router.push('/login')}
        color="#007BFF"
      />
      <Button
        title="Registrarse"
        onPress={() => router.push('/register')}
        color="#28A745"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});
