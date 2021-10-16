import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import * as Animatable from "react-native-animatable";

const GoogleSign = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#14213D" }}>
      <StatusBar backgroundColor="#14213D" barStyle="light-content" />

      <SafeAreaView style={styles.title}>
        <Text style={styles.textW}>ORRAMO</Text>
        <Text style={styles.textWM}>
          Signin or Login and handle your finances in the most convinient way.{" "}
        </Text>
      </SafeAreaView>

      <Animatable.View animation="fadeInUpBig" style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainScreen")}
          style={styles.envelop}
        >
          <FontAwesome
            style={{ paddingRight: 40, top: 0, fontSize: 20 }}
            name="google-plus"
            color="#fff"
          />
          <Text
            style={{
              color: "white",
              fontSize: 15,
              right: 20,
              fontWeight: "bold",
            }}
          >
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainScreen")}
          style={[
            styles.envelop,
            {
              paddingLeft: 27,
              paddingRight: 27,
              marginTop: 20,
              borderWidth: 0,
              backgroundColor: "#3B3D99",
            },
          ]}
        >
          <FontAwesome
            style={{ paddingRight: 40, top: 0, fontSize: 20 }}
            name="facebook"
            color="#fff"
          />
          <Text
            style={{
              color: "white",
              fontSize: 15,
              right: 20,
              fontWeight: "bold",
            }}
          >
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default GoogleSign;

const styles = StyleSheet.create({
  title: {
    marginTop: 100,
    flex: 1,
  },
  textW: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },
  textWM: {
    textAlign: "center",
    color: "#eee",
  },
  hold: {},
  button: {
    flex: 1,
    alignItems: "center",
    marginBottom: 120,
    marginTop: 15,
  },
  envelop: {
    backgroundColor: "#E16573",
    borderRadius: 30,
    padding: 20,
    paddingRight: 30,
    paddingLeft: 30,

    flexDirection: "row",
  },
});
