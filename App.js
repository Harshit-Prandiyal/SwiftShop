import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Mainscreen from "./screens/mainscreen";
import Likescreen from "./screens/likescreen";
import Profilescreen from "./screens/profilescreen";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalStyles } from "./costants/colors";
import ProductDetailScreen from "./screens/product-detail-screen";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import Cartscreen from "./screens/cart-screen";
import YourOrdersScreen from "./screens/your-purchases";
import OrderDetailScreen from "./screens/orderdetailscreen";

//authentication
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { UseSelector } from "react-redux";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MainscreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Mainscreen" component={Mainscreen} />
      <Stack.Screen
        name="Product-detail-screen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="Cartscreen" component={Cartscreen} />
    </Stack.Navigator>
  );
}
function ProfilecreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profilescreen" component={Profilescreen} />
      <Stack.Screen name="YourOrdersScreen" component={YourOrdersScreen} />
      <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: GlobalStyles.colors.gray69,
        tabBarActiveBackgroundColor: GlobalStyles.colors.gray69,
        tabBarActiveTintColor: GlobalStyles.colors.green69,
        tabBarInactiveTintColor: GlobalStyles.colors.lightgray69,
      }}
    >
      <Tab.Screen
        name="main"
        component={MainscreenNavigator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={Likescreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfilecreenNavigator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
function Navigation() {
  const auth = useSelector((state) => state.Authentication);
  //console.log(auth);
  const user = useSelector((state) => state.UserInfo);
  //console.log(user.email);
  return (
    <NavigationContainer>
     {!auth.isAuthenticated && <AuthStack />}
      {auth.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.black69,
    alignItems: "center",
    justifyContent: "center",
  },
});
