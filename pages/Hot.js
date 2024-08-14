import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import jumia from "../assets/jumia.jpg";
import travelStat from "../assets/travelstat.png";
import apple from "../assets/apple.jpg";
import bolt from "../assets/Bolt.png";
import mano from "../assets/mano.png";
import healthtracka from "../assets/healthtracka.jpg";
import primevideo from "../assets/primevideo.png";
import ayoba from "../assets/ayoba.png";
import supersport from "../assets/super.png";
import megadeals from "../assets/megadeal.png";
import mtnpulse from "../assets/mtnpulse.jpg";
import wakanow from "../assets/wakanow.png";

const Hot = ({ style }) => {
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
      <View style={styles.gridContainer2}>
        <View>
          <View style={styles.mano}>
            <Image style={styles.manoImg} source={mano} />
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              paddingLeft: 10,
            }}
          >
            Mano
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.healthtracka}>
            <Image style={styles.healthImg} source={healthtracka} />
          </View>
          <Text style={{ color: "#fff", paddingRight: 10, fontSize: 12 }}>
            Healthtracka
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.primevideo}>
            <Image style={styles.primeImg} source={primevideo} />
          </View>
          <Text style={{ color: "#fff", paddingRight: 10, fontSize: 12 }}>
            Prime video
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.ayoba}>
            <Image style={styles.ayobaImg} source={ayoba} />
          </View>
          <Text style={{ color: "#fff", paddingRight: 10, fontSize: 12 }}>
            Ayoba
          </Text>
        </View>
      </View>
      <View style={styles.gridContainer3}>
        <View>
          <View style={styles.supersport}>
            <Image style={styles.superImg} source={supersport} />
          </View>
          <Text style={{ color: "#fff", fontSize: 12, paddingLeft: 5 }}>
            Super Sport
          </Text>
        </View>
        <View>
          <View style={styles.megadeals}>
            <Image style={styles.megaImg} source={megadeals} />
          </View>
          <Text style={{ color: "#fff", fontSize: 12 }}>Mega deals</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={styles.mtnpulse}>
            <Image style={styles.mtnImg} source={mtnpulse} />
          </View>
          <Text style={{ color: "#fff", paddingRight: 10, fontSize: 12 }}>
            MTN Pulse
          </Text>
          <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 12 }}>
            Campus
          </Text>
        </View>
        <View>
          <View style={styles.wakanow}>
            <Image style={styles.wakaImg} source={wakanow} />
          </View>
          <Text style={{ color: "#fff", fontSize: 12, paddingLeft: 5 }}>
            Wakanow
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Hot;

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
  primevideo: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 20,
  },
  primeImg: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  ayoba: {
    width: 55,
    height: 55,
    backgroundColor: "#1160A1",
    borderRadius: 10,
  },
  ayobaImg: {
    width: 55,
    height: 55,
    borderRadius: 80,
  },
  supersport: {
    width: 55,
    height: 55,
    backgroundColor: "#333738",
    borderRadius: 10,
    marginRight: 20,
  },
  superImg: {
    width: 55,
    height: 55,
  },
  megadeals: {
    width: 55,
    height: 55,
    backgroundColor: "#000000",
    borderRadius: 10,
    marginRight: 20,
  },
  megaImg: {
    width: 55,
    height: 55,
  },
  mtnpulse: {
    width: 55,
    height: 55,
    backgroundColor: "#000000",
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mtnImg: {
    width: 45,
    height: 45,
    objectFit: "contain",
  },
  wakanow: {
    width: 55,
    height: 55,
    backgroundColor: "#333738",
    borderRadius: 10,
    marginRight: 20,
  },
  wakaImg: {
    width: 55,
    height: 55,
  },
});
