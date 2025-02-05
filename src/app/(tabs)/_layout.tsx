import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./home";
import LoginScreen from "./login";
import RegisterScreen from "./register";
import IndexScreen from "./index";

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="index" component={IndexScreen} />
    </Stack.Navigator>
  );
}
