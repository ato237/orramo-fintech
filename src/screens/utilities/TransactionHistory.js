import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { transaction } from "../../data/transactionData";
import { Avatar } from "react-native-elements";

const TransactionHistory = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 23,
          fontWeight: "bold",
          textAlign: "left",
          marginTop: 30,
        }}
      >
        Transaction History
      </Text>
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
    </SafeAreaView>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1FB",
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
});
