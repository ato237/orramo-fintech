import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import { FontAwesome } from "react-native-vector-icons";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F1F1FB" barStyle="dark-content" />

      <View style={styles.header}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: "https://scontent-frx5-2.xx.fbcdn.net/v/t1.6435-9/83503810_1844210712377405_5153236228576903168_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG_gILGeHLGZ2KyuY8Cln9OU9KnOnwT0ZtT0qc6fBPRmzovVvx3XPk7_qc2OjPFhlveBssFwT2ZKA4drvQSXm8B&_nc_ohc=VTkcDh96Ot8AX_EJFjW&_nc_ht=scontent-frx5-2.xx&oh=418cf24e3b88c719fe9cefb41ec82fa8&oe=618BE977",
          }}
        />
        <View style={styles.divider}>
          <FontAwesome name="bell" size={30} color="#000" />
        </View>
      </View>
      <View style={styles.moneyContainer}>
        <View style={styles.amountContainer}>
          <Text
            style={{
              color: "gray",
              bottom: 20,
              fontSize: 18,
              fontWeight: "bold",
                          bottom: 30,
              right:30
            }}
          >
            You Orramo Balance
          </Text>
          <Text
            style={{
              color: "#3B3D99",
              opacity: 0.5,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            439.25 USD
          </Text>
          <Text style={styles.amount}>250,000 XAF</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="add" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1FB",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  amountContainer: {
    backgroundColor: "#fff",
    padding: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  divider: {
    paddingLeft: Dimensions.get("window").width - 130,
  },
  amount: {
    color: "#3B3D99",
    fontWeight: "bold",
    fontSize: 40,
  },
  moneyContainer: {
    flex: 1,
    marginTop: 20,
  },
  buttons: {
    left: Dimensions.get("window").width - 100,
    top: Dimensions.get("window").height - 150,
    position: "absolute",
  },
  button: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fca311",
    padding: 12,
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
});
