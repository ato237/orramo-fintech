import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
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
  buttonWrapper: {
    backgroundColor: "#2E3192",
    borderRadius: 30,
    paddingHorizontal: 70,
    padding: 20,
  },
});
