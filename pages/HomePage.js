import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import { StatusBar } from "expo-status-bar";
import React from "react";
import notify from "../assets/icons/notifn.png";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import IconMat from "react-native-vector-icons/MaterialIcons";
import Slider from "../component/Slider";
import help_icon from "../assets/help_icon.png";
import { useRoute } from "@react-navigation/native";

const HomePage = ({ firstname }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark" backgroundColor="#fff" />

      <View style={styles.upperBg}>
        <ImageBackground
          source={require("../assets/bg2.jpg")}
          style={styles.background}
        >
          <View style={styles.header}>
            <View style={styles.iconBg}>
              <MaterialIcons name="person" size={30} color="black" />
            </View>
            <View style={styles.yello}>
              <Text style={styles.textColor}>
                <Text style={{ fontWeight: "bold" }}>yellow,</Text> {firstname}
              </Text>
              <Text style={styles.textColor}>07025736899</Text>
              <LinearGradient
                colors={["white", "white", "white"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
              >
                <View style={styles.prestige}>
                  <Icon
                    style={styles.prestigeIcon}
                    name="thumbs-up"
                    size={15}
                    color="black"
                  />
                  <Text style={styles.prestigeTxt}>Explore prestige</Text>
                  <IconMat
                    style={styles.prestigeIcon}
                    name="keyboard-arrow-right"
                    size={20}
                    color="black"
                  />
                </View>
              </LinearGradient>
            </View>
            <View style={styles.notifnBell}>
              <ImageBackground style={styles.notBg} source={notify}>
                <Text style={styles.notifnText}>35</Text>
              </ImageBackground>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.sliderView}>
        <Slider />
      </View>
      <View style={styles.lowerBg}>
        <View style={styles.updates}>
          <Image style={styles.helpImg} source={help_icon} />
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  upperBg: {
    flex: 1,
  },
  sliderView: {
    position: "absolute",
    top: 170,
    left: 10,
    right: 10,
    bottom: 0,
    zIndex: 1, // Ensure this view is on top
    height: 550,
  },
  lowerBg: {
    flex: 1,
  },
  helpImg: {
    height: 50,
    width: 50,
    objectFit: "contain",
  },
  updates: {
    marginTop: 150,
    zIndex: 1, // Ensure this view is on top
    height: 70,
    width: 70,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Align to the right
    backgroundColor: "transparent", // Make background transparent
    position: "absolute", // Absolute positioning
    right: 20, // Align to the right
    bottom: 100, // Position from the bottom
    borderColor: "#fff", // Yellow border color
    borderWidth: 2, // Width of the border
    borderRadius: 50,
  },
  background: {
    width: "100%",
    height: "75%",
  },

  notBg: {
    height: 50,
    width: 50,
  },
  iconBg: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 35,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    marginLeft: 10,
    marginBottom: 50,
    marginTop: 50,
  },
  yello: {
    justifyContent: "space-between",
    marginRight: 50,
  },
  textColor: { color: "white", marginBottom: 10 },
  gradient: {
    width: "90%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  prestige: {
    height: 30,
    width: 180,
    backgroundColor: "#C5C5C6",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  prestigeTxt: {
    fontSize: 12,
    marginRight: 5,
  },

  prestigeIcon: {
    marginRight: 5,
    padding: 5,
  },

  notifnBell: {
    flexDirection: "row",
  },
  notifnText: {
    backgroundColor: "#FDCB04", // semi-transparent background
    height: 15,
    width: 15,
    textAlign: "center", // center the text
    position: "absolute", // absolute positioning
    left: 20,
    top: 8,
    bottom: 10,
    borderRadius: 7.5,
    fontSize: 10,
    fontWeight: "bold",
  },
});
