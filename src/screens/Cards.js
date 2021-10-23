import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Cards = () => {
  return (
    <View style={styles.container}>
      <Text>This is the card Page</Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1FB",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
