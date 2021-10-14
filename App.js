import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StarterScreen from './screens/StarterScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';



export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator initialRouteName="StarterScreen">
      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
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
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
