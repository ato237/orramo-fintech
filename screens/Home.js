import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-elements";
import { FontAwesome } from "react-native-vector-icons";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { transaction } from "../data/transactionData";

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
      <Text style={{ fontSize: 25 }}>Welcome Tony Bradley!</Text>
      <View style={styles.moneyContainer}>
        <View style={styles.amountContainer}>
          <Text
            style={{
              color: "gray",
              fontSize: 15,
              fontWeight: "bold",
              bottom: 50,
            }}
          >
            You Orramo Balance
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Text style={styles.amount}>XAF 250,000</Text>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  top: 5,
                  color: "#3B3D99",
                  opacity: 0.5,
                  fontWeight: "bold",
                  fontSize: 15,
                  paddingLeft: 60,
                }}
              >
                $ 439.25
              </Text>
              <Text
                style={{
                  top: 5,
                  color: "grey",
                  opacity: 1.0,
                  fontWeight: "bold",
                  fontSize: 12,
                  left: 30,
                }}
              >
                1 USD = 650 XAF
              </Text>
            </View>
          </View>
        </View>
      </View>
          <View style={styles.buttons}>
  
        <TouchableOpacity style={[styles.button, { zIndex: 999 }]}>
                  <Ionicons name="add" size={40} color="#fff"/>
        </TouchableOpacity>
      </View>
      <View style={styles.recent}>
        <Text style={styles.activity}>Transaction History</Text>

        <ScrollView style={{ marginTop: 10 }}>
          {transaction.map((data, index) => (
            <View key={index} style={styles.history}>
              <Avatar
                rounded
                size="small"
                source={{
                  uri: data.image,
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{ color: "#14213D", fontSize: 15, paddingLeft: 20 }}
                >
                  {data.name}
                </Text>
                <Text style={{ color: "gray", fontSize: 12, paddingLeft: 20 }}>
                  {data.date}
                </Text>
              </View>
              <Text
                style={{ color: "#14213D", fontSize: 15, marginLeft: 100,left:25 }}
              >
                XAF {data.amount}
              </Text>
            </View>
          ))}
        </ScrollView>
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
    padding: 20,
    paddingTop: 70,
    borderRadius: 15,
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
  activity: {
    paddingRight: Dimensions.get("window").width - 180,
    color: "gray",
  },
  amount: {
    color: "#3B3D99",
    fontWeight: "bold",
    fontSize: 30,
  },
  moneyContainer: {
    flex: 1,
    marginTop: 20,
  },
  buttons: {
    left: Dimensions.get("window").width - 100,
    top: Dimensions.get("window").height - 150,
      position: "absolute",
      zIndex:999,

  },
  button: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fca311",
    padding: 12,
    width: 70,
    height: 70,
    borderRadius: 40,
      marginBottom: 20,

  },
  recent: {
    flex: 2,
  },
  history: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    marginTop: 10,
      borderRadius: 15,
      zIndex: -99,
      elevation: 0,

  },
});
