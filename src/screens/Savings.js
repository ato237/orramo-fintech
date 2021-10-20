import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Savings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.savings}>
      <Text style={{fontSize:50,color:'#2E3192'}}>0</Text>
      <Text>XAF</Text>
      </View>
      <View></View>
    </View>
  );
};

export default Savings;

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  savings:{
    justifyContent:'center',
  flexDirection:'row',marginTop:80
  }

});
