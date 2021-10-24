import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./src/screens/Signup";
import MainScreen from "./src/screens/MainScreen";
import GoogleSign from "./src/screens/GoogleSign";
import TopupOptions from "./src/screens/topup/TopupOptions";

import StarterScreen from "./src/screens/StarterScreen";

import firebase from "firebase";
import { firebaseconfig } from "./src/screens/config";
import LoadingScreen from "./src/screens/utilities/LoadingScreen";
import Login from "./src/screens/Login";
import { LoginContext } from "./src/context/LoginContext";
import Settings from "./src/screens/Settings";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [signout, setSignout] = React.useState(false);
  const [logged, setLogged] = React.useState(false);

  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    });
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <NavigationContainer independent={true}>
      <LoginContext.Provider value={{ signout, setSignout }}>
        <Stack.Navigator>
          {!logged ? (
            <Stack.Group>
              <Stack.Screen
                name="StarterScreen"
                component={StarterScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
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
            </Stack.Group>
          ) : (
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </LoginContext.Provider>
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
