import React, { useRef, PureComponent, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Platform,
  TouchableHighlight,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { Avatar } from "react-native-elements";
import { MaterialIcons } from "react-native-vector-icons";
import { Feather } from "react-native-vector-icons";
import Carousel from "pinar";
import { FontAwesome } from "react-native-vector-icons";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { transaction } from "../data/transactionData";
import { Money } from "../data/transactionData";
import SlidingUpPanel from "rn-sliding-up-panel";
import { auth } from "./config";

const Home = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");

  const [dragRange, setDragRange] = useState({
    top: height - 100,
    bottom: 250,
  });

  const _draggedValue = new Animated.Value(180);

  const ModalRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F1F1FB" barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: "https://scontent-frx5-2.xx.fbcdn.net/v/t1.6435-9/83503810_1844210712377405_5153236228576903168_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG_gILGeHLGZ2KyuY8Cln9OU9KnOnwT0ZtT0qc6fBPRmzovVvx3XPk7_qc2OjPFhlveBssFwT2ZKA4drvQSXm8B&_nc_ohc=VTkcDh96Ot8AX_EJFjW&_nc_ht=scontent-frx5-2.xx&oh=418cf24e3b88c719fe9cefb41ec82fa8&oe=618BE977",
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: "#2E3192",
            left: 25,
          }}
        >
          Welcome {auth.currentUser?.email}
        </Text>
        <View style={styles.divider}>
          <FontAwesome name="bell" size={30} color="#000" />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginLeft: 50,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            justifyContent: "flex-start",
          }}
        >
          Account Overview
        </Text>
      </View>
      <View style={styles.moneyContainer}>
        <View style={styles.amountContainer}>
          <Text
            style={{
              color: "gray",
              fontSize: 13,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            You Orramo Balance
          </Text>
          <View style={{ justifyContent: "center" }}>
            <View style={{ flexDirection: "column" }}>
              {/*<Text style={styles.amount}>XAF 100,500,000</Text>*/}
              <Carousel
                loop={true}
                showsControls={false}
                style={{
                  marginBottom:
                    Dimensions.get("window").height <= 667 ? 45 : 45,
                }}
              >
                {Money.map((item, index) => (
                  <View key={index}>
                    <View style={styles.slide1}>
                      <View>
                        <Text style={{ fontSize: 14 }}>{item.currency}</Text>
                      </View>
                      <Text style={styles.text}>{item.amount}</Text>
                    </View>
                  </View>
                ))}
              </Carousel>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginRight: 270,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            justifyContent: "flex-start",
          }}
        >
          Services
        </Text>
      </View>
      <Carousel showsHorizontalScrollIndicator={true} showsDots={false}>
        <View style={styles.buttons}>
          <View>
            {/**Top up Button */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Topup")}
              style={[styles.button, { zIndex: 999 }]}
            >
              <MaterialIcons
                style={styles.iconStyle}
                name="call-received"
                size={35}
                color="#000"
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.buttonText,
                {
                  right: 11,
                },
              ]}
            >
              Deposit
            </Text>
          </View>
          <View>
            {/**Send Money Button */}

            <TouchableOpacity
              onPress={() => navigation.navigate("Withdraw")}
              style={[styles.button, { zIndex: 999 }]}
            >
              <Feather
                style={styles.iconStyle}
                name="send"
                size={35}
                color="#000"
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.buttonText,
                {
                  right: 15,
                },
              ]}
            >
              Withdraw
            </Text>
          </View>

          <View>
            {/**Semd Button */}

            <TouchableOpacity
              onPress={() => navigation.navigate("More")}
              style={[styles.button, { zIndex: 999 }]}
            >
              <Ionicons
                style={styles.iconStyle}
                name="people-outline"
                size={35}
                color="#000"
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.buttonText,
                {
                  right: 15,
                },
              ]}
            >
              Transfer
            </Text>
          </View>
        </View>
        <View style={[styles.buttons, { left: 18 }]}>
          <View>
            {/**Top up Button */}
            <TouchableHighlight
              onPress={() => navigation.navigate("Topup")}
              style={[styles.button, { zIndex: 999 }]}
            >
              <Ionicons
                style={styles.iconStyle}
                name="cash-outline"
                size={35}
                color="#000"
              />
            </TouchableHighlight>
            <Text
              style={[
                styles.buttonText,
                {
                  right: 11,
                },
              ]}
            >
              Airtime
            </Text>
          </View>
          <View>
            {/**Send Money Button */}

            <TouchableOpacity
              onPress={() => navigation.navigate("Withdraw")}
              style={[styles.button, { zIndex: 999 }]}
            >
              <MaterialIcons
                style={styles.iconStyle}
                name="receipt"
                size={35}
                color="#000"
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.buttonText,
                {
                  right: 15,
                },
              ]}
            >
              Pay Bills
            </Text>
          </View>

          <View>
            {/**Semd Button */}

            <TouchableOpacity
              onPress={() => navigation.navigate("More")}
              style={[styles.button, { zIndex: 999 }]}
            >
              <FontAwesome
                style={styles.iconStyle}
                name="bitcoin"
                size={35}
                color="#000"
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.buttonText,
                {
                  right: 28,
                },
              ]}
            >
              Buy Crypto
            </Text>
          </View>
        </View>
      </Carousel>
      {/**History Details */}

      <View style={styles.recent}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.activity}>Transaction History</Text>
          <View style={{ paddingLeft: Dimensions.get("window").width - 220 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("History")}
              style={{ justifyContent: "flex-end" }}
            >
              <Text
                style={[styles.activity, { textDecorationLine: "underline" }]}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 10,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <View
            style={{
              marginTop: 1,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
              width: Platform.OS == "ios" ? 350 : 380,
            }}
          >
            {transaction.map((data, index) => (
              <TouchableWithoutFeedback key={index}>
                <View style={styles.history}>
                  <View style={{ flexDirection: "row" }}>
                    <Avatar
                      rounded
                      size="small"
                      source={{
                        uri: data.image,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                      }}
                    >
                      <Text
                        style={{
                          color: "#14213D",
                          fontSize: 15,
                          paddingLeft: 10,
                        }}
                      >
                        {data.name}
                      </Text>
                      <Text
                        style={{
                          color: "#fca311",
                          fontSize: 12,
                          paddingLeft: 10,
                        }}
                      >
                        {data.date}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.transactionList}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "gray",
                        textAlign: "right",
                      }}
                    >
                      {data.currency}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#14213D",
                        opacity: 0.8,
                        fontSize: 15,
                        textAlign: "right",
                      }}
                    >
                      {data.amount}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
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
    marginTop: Platform.OS == "ios" ? 20 : 0,
  },
  amountContainer: {
    paddingTop: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  divider: {
    paddingLeft: Dimensions.get("window").width - 360,
  },
  activity: {
    color: "gray",
  },
  amount: {
    color: "#3B3D99",
    fontSize: 40,
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center",
  },
  moneyContainer: {
    flex: Dimensions.get("window").height <= 667 ? 1.3 : 1.2,
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "92%",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  buttons: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 18,
  },
  button: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fca311",
    padding: 12,
    width: Dimensions.get("window").height <= 667 ? 60 : 70,
    height: Dimensions.get("window").height <= 667 ? 60 : 70,
    borderRadius: 18,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonText: {
    marginLeft: 40,
    bottom: 15,
    color: "black",
    opacity: 0.8,
  },
  recent: {
    flex: Dimensions.get("window").height <= 667 ? 1.3 : 2.5,
    alignContent: "center",
    alignItems: "center",
  },
  history: {
    backgroundColor: "#fff",
    marginBottom: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 8,
    zIndex: -99,
    elevation: 0,
    justifyContent: "space-between",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  transactionList: {
    flexDirection: "row",
  },
  transactionItems: {},
  slide1: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#1E2061",
    opacity: 0.9,
    fontSize: 35,
    fontWeight: "bold",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  iconStyle: {
    top: Dimensions.get("window").height <= 667 ? 0 : 4,
  },
});
