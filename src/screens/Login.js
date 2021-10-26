import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "react-native-vector-icons";
import { FontAwesome } from "react-native-vector-icons";
import { Feather } from "react-native-vector-icons";
import { auth } from "./config";

const Login = ({ navigation }) => {
  {
    /**The Data for the password and the email  */
  }
  const [signed, setSigned] = React.useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("MainScreen");
      } else {
        navigation.navigate("Login");
      }
    });
  }, []);

  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecurityTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleLogin = () => {
    setSigned(true);
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("logged in with", user.email);
        setSigned(false);
      })
      .catch((error) => {
        alert(error.message);
        setSigned(false);
      });
  };

  navigation = useNavigation();
  return (
    <>
      {/**The login View */}
      <View style={styles.container}>
        <StatusBar backgroundColor="#14213D" barStyle="light-content" />

        <View style={styles.header}>
          <Text style={styles.text_header}>Login</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#FFA500" size={20} />
            <TextInput
              placeholder="Enter email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
              placeholderTextColor="#5C667B"
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>

          <View style={styles.action}>
            <FontAwesome name="lock" color="#FFA500" size={20} />
            <TextInput
              placeholder="Enter Password"
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
              placeholderTextColor="#5C667B"
            />
            <TouchableOpacity onPress={updateSecurityTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {/**Sign Up button */}
          <View style={styles.button}>
            <TouchableOpacity
              onPress={handleLogin}
              style={[
                styles.signIn,
                {
                  flexDirection: "row",
                  backgroundColor: "#14213D",
                  marginTop: 0,
                },
              ]}
            >
              <LinearGradient
                colors={["#FFA500", "#FFA500"]}
                style={styles.signIn}
              >
                <Text style={[styles.textSign, { color: "#000" }]}>
                  {signed ? (
                    <ActivityIndicator size="large" color="#fff" />
                  ) : (
                    "Sign In"
                  )}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ color: "#fff" }}>Don't yet have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={{ color: "#FFA500", paddingHorizontal: 5 }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/**Sign in With google button 

          <View style={styles.buttonG}>
            <Text> Or </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("MainScreen")}
              style={[
                styles.signIn,
                {
                  flexDirection: "row",
                  backgroundColor: "#CF3F37",
                  marginTop: 15,
                },
              ]}
            >
              <LinearGradient
                colors={["#CF3F37", "#CF3F37"]}
                style={[
                  styles.signIn,
                  {
                    flexDirection: "row",
                  },
                ]}
              >
                <FontAwesome
                  style={{ right: 60, top: 2, fontSize: 20 }}
                  name="google-plus"
                  color="#fff"
                />
                <Text style={[styles.textSign, { color: "#fff" }]}>
                  Sign In with Google
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
           */}
        </Animatable.View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14213D",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  footer: {
    flex: 5,
    backgroundColor: "#14213D",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 42,
  },
  text_footer: {
    color: "#EBD968",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#fff",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  buttonG: {
    alignItems: "center",
    marginTop: 20,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
