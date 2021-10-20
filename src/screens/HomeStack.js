import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import TopupOptions from "./topup/TopupOptions";
import MoreOptions from "./more/MoreOptions";
import WithdrawOptions from "./withdraw/WithdrawOptions";


const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Topup"
          component={TopupOptions}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="More"
          component={MoreOptions}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Withdraw"
          component={WithdrawOptions}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
