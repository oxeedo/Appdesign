import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import jumia from "../assets/jumia.jpg";
import mano from "../assets/mano.png";

const Shop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <View>
          <View style={styles.jumia}>
            <Image style={styles.jumiaImg} source={jumia} />
          </View>
          <Text style={{ color: "#fff", fontSize: 12, paddingLeft: 10 }}>
            Jumia
          </Text>
          <Text style={{ color: "#fff", fontSize: 12 }}>(10% off)</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <View style={styles.mano}>
            <Image style={styles.manoImg} source={mano} />
          </View>
          <Text style={{ color: "#fff", fontSize: 12, alignItems: "center" }}>
            Mano
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333738",
  },
  gridContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 20,
  },
  gridContainer2: {
    width: "100%",
    height: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
  },
  gridContainer3: {
    width: "100%",
    height: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
  },
  jumia: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 20,
  },
  jumiaImg: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  travelStat: {
    width: 55,
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginRight: 20,
    alignItems: "center",
  },
  travelStatImg: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },

  apple: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 20,
  },
  appleImg: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  bolt: {
    width: 55,
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boltImg: {
    width: 40,
    height: 40,
    objectFit: "contain",
  },
  mano: {
    width: 55,
    height: 55,
    backgroundColor: "#F0243B",
    borderRadius: 10,
    marginRight: 20,
  },
  manoImg: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  healthtracka: {
    width: 55,
    height: 55,
    backgroundColor: "#FBFBFB",
    borderRadius: 10,
    marginRight: 20,
  },
  healthImg: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
});
