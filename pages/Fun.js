import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import jumia from "../assets/jumia.jpg";
import travelStat from "../assets/travelstat.png";
import apple from "../assets/apple.jpg";
import bolt from "../assets/Bolt.png";

const Fun = () => {
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
          <View style={styles.travelStat}>
            <Image style={styles.travelStatImg} source={travelStat} />
          </View>
          <Text style={{ color: "#fff", fontSize: 12, alignItems: "center" }}>
            Travelstat
          </Text>
        </View>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <View style={styles.apple}>
            <Image style={styles.appleImg} source={apple} />
          </View>
          <Text style={{ color: "#fff", fontSize: 12 }}>Apple music</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View style={styles.bolt}>
            <Image style={styles.boltImg} source={bolt} />
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              alignItems: "center",
            }}
          >
            Bolt
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Fun;

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
