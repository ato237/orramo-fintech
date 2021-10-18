import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./Home";
import Account from "./Account";
import Cards from "./Cards";
import Savings from "./Savings";
import Home2 from "./Home2";

const MainScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Savings") {
              iconName = focused ? "wallet" : "wallet-outline";
            } else if (route.name === "Cards") {
              iconName = focused ? "card" : "card-outline";
            } else if (route.name === "Account") {
              iconName = focused
                ? "person-circle"
                : "person-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#3B3D99",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Savings"
          component={Savings}
          options={{
            headerShown: true,
          }}
        />

        <Tab.Screen
          name="Cards"
          component={Cards}
          options={{
            headerShown: true,
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
