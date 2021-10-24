import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "./config";
import { LoginContext } from "../context/LoginContext";

const Settings = ({ navigation }) => {
  const { setSignout } = useContext(LoginContext);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setSignout(true);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={{ color: "white", fontSize: 20 }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1FB",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {},
  button: {
    backgroundColor: "#2E3192",
    borderRadius: 30,
    paddingHorizontal: 70,
    padding: 20,
  },
});
