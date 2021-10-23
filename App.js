import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./src/screens/Signup";
import MainScreen from "./src/screens/MainScreen";
import GoogleSign from "./src/screens/GoogleSign";
import TopupOptions from "./src/screens/topup/TopupOptions";

import StarterScreen from "./src/screens/StarterScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="StarterScreen">
        {/*    <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />*/}
        <Stack.Screen
          name="StarterScreen"
          component={StarterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GoolgeSign"
          component={GoogleSign}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TopupOptions"
          component={TopupOptions}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
