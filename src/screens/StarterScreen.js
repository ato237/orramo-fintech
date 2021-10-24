import React from "react";
import {
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
const StarterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#14213D" barStyle="light-content" />

      <View style={styles.logo}>
        <Text style={styles.text}>ORRAMO</Text>
        <Text style={styles.description}>Your finances in one place!</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonCover}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
            Get Started!
          </Text>
        </TouchableOpacity>
        {/*<View style={{flex:1, flexDirection:'row',marginTop:15}}>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            Already have an account?
           
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 13,
                  color: "#1E2061",
                  marginLeft: 5,
                  fontWeight: "bold",
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
              </View>*/}
      </View>
    </View>
  );
};

export default StarterScreen;

var width = { height: 60 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#14213D",
  },
  text: {
    textAlign: "center",

    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
  },
  logo: {
    flex: 3,
    borderRadius: 5,
    justifyContent: "center",
  },
  button: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
  },
  buttonCover: {
    padding: 15,
    paddingRight: 110,
    paddingLeft: 110,
    borderRadius: 5,
    backgroundColor: "#EA9700",
  },
  description: {
    maxWidth: 250,
    textAlign: "center",
    color: "#eee",
    marginTop: 10,
  },
});
