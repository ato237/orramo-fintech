import React, { useRef, PureComponent } from "react";
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

import { FontAwesome } from "react-native-vector-icons";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { transaction } from "../data/transactionData";
import { Money } from "../data/transactionData";
import Carousel, { getInputRangeFromIndexes } from "react-native-snap-carousel";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = ({ navigation }) => {
  const RenderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <View
          style={{
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          <Text style={[styles.amount, { fontSize: 17 }]}>{item.currency}</Text>

          <Text style={[styles.amount, { width: 1000 }]}>{item.amount}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef(null);

  const _draggedValue = new Animated.Value(180);

  const ModalRef = useRef(null);

  const _scrollInterpolator = (index, carouselProps) => {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
  };

  const _animatedStyles = (index, animatedValue, carouselProps) => {
    const sizeRef = carouselProps.vertical
      ? carouselProps.itemHeight
      : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? "translateY" : "translateX";

    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [2, 3],
        outputRange: [1, 0],
      }),
      transform: [
        {
          rotate: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: ["-25deg", "0deg", "-3deg", "1.8deg", "0deg"],
            extrapolate: "clamp",
          }),
        },
        {
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: [
              -sizeRef * 0.5,
              0,
              -sizeRef, // centered
              -sizeRef * 2, // centered
              -sizeRef * 3, // centered
            ],
            extrapolate: "clamp",
          }),
        },
      ],
    };
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F1F1FB" barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: "https://scontent-frx5-2.xx.fbcdn.net/v/t1.6435-9/83503810_1844210712377405_5153236228576903168_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG_gILGeHLGZ2KyuY8Cln9OU9KnOnwT0ZtT0qc6fBPRmzovVvx3XPk7_qc2OjPFhlveBssFwT2ZKA4drvQSXm8B&_nc_ohc=VTkcDh96Ot8AX_EJFjW&_nc_ht=scontent-frx5-2.xx&oh=418cf24e3b88c719fe9cefb41ec82fa8&oe=618BE977",
            }}
          />
        </TouchableOpacity>
        <View style={styles.divider}>
          <FontAwesome name="bell" size={30} color="#000" />
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          color: "#2E3192",
          justifyContent: "flex-start",
        }}
      >
        Welcome Tony Bradley!
      </Text>
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
              <View>
                {/*<Text style={styles.amount}>XAF 100,500,000</Text>*/}
                <Carousel
                  ref={carouselRef}
                  data={Money}
                  sliderWidth={270}
                  itemWidth={250}
                  renderItem={RenderItem}
                  useScrollView={true}
                  enableSnap={true}
                  loop={true}
                  inactiveSlideOpacity={0.1}
                  activeSlideAlignment="start"
                  autoplay={true}
                  enableMomentum={false}
                  lockScrollWhileSnapping={true}
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                  textAlign: "center",
                  top: 10,
                }}
              >
                Swipe for other balance
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <View>
          {/**Top up Button */}
          <TouchableHighlight
            onPress={() => navigation.navigate("Topup")}
            style={[styles.button, { zIndex: 999 }]}
          >
            <MaterialIcons
              style={{ top: 4 }}
              name="call-received"
              size={35}
              color="#fff"
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
            Top-Up
          </Text>
        </View>
        <View>
          {/**Send Money Button */}

          <TouchableOpacity
            onPress={() => navigation.navigate("More")}
            style={[styles.button, { zIndex: 999 }]}
          >
            <Feather style={{ top: 4 }} name="send" size={35} color="#fff" />
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
            onPress={() => navigation.navigate("Withdraw")}
            style={[styles.button, { zIndex: 999 }]}
          >
            <Ionicons style={{ top: 4 }} name="grid" size={35} color="#fff" />
          </TouchableOpacity>
          <Text
            style={[
              styles.buttonText,
              {
                right: 28,
              },
            ]}
          >
            Send and More
          </Text>
        </View>

        {/**History Details */}
      </View>
      <View style={styles.recent}>
        <Text style={styles.activity}>Transaction History</Text>
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
              backgroundColor: "#fff",
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
              width: Platform.OS == "ios" ? 350 : 380,
            }}
          >
            {transaction.map((data, index) => (
              <View key={index} style={styles.history}>
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
                    style={{ fontSize: 13, color: "gray", textAlign: "right" }}
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
    paddingLeft: Dimensions.get("window").width - 130,
  },
  activity: {
    paddingRight: Dimensions.get("window").width - 160,
    color: "gray",
    opacity: 0.5,
  },
  amount: {
    color: "#3B3D99",
    fontSize: 40,
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center",
  },
  moneyContainer: {
    flex: 1,
    marginTop: 20,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 30,
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
    marginRight: 20,
    marginLeft: 20,
  },
  buttonText: {
    marginLeft: 40,
    bottom: 15,
    color: "gray",
  },
  recent: {
    flex: 2.5,
    alignContent: "center",
    alignItems: "center",
  },
  history: {
    marginBottom: 5,
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 8,
    zIndex: -99,
    elevation: 0,
    justifyContent: "space-between",
  },
  transactionList: {
    flexDirection: "row",
  },
  transactionItems: {},
});
