import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Mainscreen from "./screens/mainscreen";
import Likescreen from "./screens/likescreen";
import Profilescreen from "./screens/profilescreen";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalStyles } from "./costants/colors";
import ProductDetailScreen from "./screens/product-detail-screen";
import { Provider } from "react-redux";
import {store} from './redux/store'
import Cartscreen from "./screens/cart-screen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MainscreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Mainscreen" component={Mainscreen} />
      <Stack.Screen name="Product-detail-screen" component={ProductDetailScreen} />
      <Stack.Screen name="Cartscreen" component={Cartscreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <StatusBar style='light'/>
    <NavigationContainer>
    <Tab.Navigator screenOptions={{tabBarInactiveBackgroundColor:GlobalStyles.colors.gray69,tabBarActiveBackgroundColor:GlobalStyles.colors.gray69,
    tabBarActiveTintColor:GlobalStyles.colors.green69,tabBarInactiveTintColor:GlobalStyles.colors.lightgray69
  }}>
    <Tab.Screen
        name="main"
        component={MainscreenNavigator}
        options={{headerShown:false,tabBarShowLabel:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
        ),}}
      />
      <Tab.Screen
        name="Like"
        component={Likescreen}
        options={{headerShown:false,tabBarShowLabel:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
      

      <Tab.Screen
        name="Profile"
        component={Profilescreen}
        options={{headerShown:false,tabBarShowLabel:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
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
