import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TopupOptions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.depositOption}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.depositText}>Orange Money Deposit </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.depositOption}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#FFA500" }]}
        >
          <Text style={styles.depositText}>MTN Mobile Money Deposit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopupOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1FB",
  },
  depositOption: {
    marginBottom: 50,
  },
  depositText: {
    fontSize: 20,
    color: "#fff",
  },
  button: {
    padding: 30,
    backgroundColor: "#DF4818",
  },
});
