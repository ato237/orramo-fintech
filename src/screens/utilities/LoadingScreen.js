import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { auth } from "../firebaseconfig";
import { SafeAreaView } from "react-native-safe-area-context";

const LoadingScreen = ({ navigation }) => {
  {
    /** const checkIfLoggedIn = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("MainScreen");
      } else {
        navigation.navigate("GoolgeSign");
      }
    });
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []); */
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#14213D" barStyle="light-content" />

      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14213D",
  },
});
