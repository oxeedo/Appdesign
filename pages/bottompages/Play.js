import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import bolt from "../../assets/Bolt.png";

const Play = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <View style={styles.jumia}>
          <Text>Jumia</Text>
          <Image style={styles.boltImg} source={bolt} />
        </View>
      </View>
    </View>
  );
};

export default Play;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "100%",
    backgroundColor: "red",
    marginTop: 40,
  },
  jumia: {
    width: "30",
  },
  boltImg: {
    width: 20,
    height: 20,
    objectFit: "contain",
  },
});
