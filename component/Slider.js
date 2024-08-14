import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Pinar from "pinar";
import { LinearGradient } from "expo-linear-gradient";
import TabNavigation from "../pages/TabNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import IconMat from "react-native-vector-icons/MaterialIcons";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const Slider = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.carouselContainer}>
          <View style={styles.pulseTxt}>
            <Text style={styles.textColor}>
              <Text style={{ fontWeight: "bold" }}>07025736899</Text> | ameh
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Text style={{ color: "#FDCB04" }}>Pulse</Text>
              <IconMat
                style={{
                  top: 2,
                  right: 5,
                }}
                name="keyboard-arrow-right"
                size={25}
                color="#FDCB04"
              />
            </View>
          </View>
          <Pinar
            style={styles.carousel}
            showsControls={false}
            showsDots
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
          >
            <LinearGradient
              colors={["#BABABA", "#DBDBDB", "#979797"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 1 }}
              style={styles.slide}
            >
              <View style={styles.viewContainer}>
                <View style={{ paddingBottom: 10 }}>
                  <Text style={styles.text}>Airtime Balance</Text>
                  <Text style={styles.text}>#60.8</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>Buy Bundle</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.text}>Data Balance</Text>
                  <Text style={styles.text}>#60.8</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>Recharge</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.viewText}>
                <Text style={{ fontWeight: "bold" }}>View Details</Text>
              </View>
            </LinearGradient>

            <View style={styles.slide2}>
              <View style={styles.linkNum}>
                <TouchableOpacity style={styles.iconNum}>
                  <Text>+</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Add linked</Text>
                <Text style={styles.text}>Number</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.manageNum}>
                <TouchableOpacity style={styles.iconNum}>
                  <Text>+</Text>
                </TouchableOpacity>

                <Text style={styles.text}>Manage</Text>
                <Text style={styles.text}>Number</Text>
              </View>
            </View>
          </Pinar>
        </View>
        <TabNavigation />

        <View style={styles.carouselContainer2}>
          <Pinar
            style={styles.carousel}
            showsControls={false}
            showsDots
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
          >
            <LinearGradient
              colors={["#BABABA", "#DBDBDB", "#979797"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 1 }}
              style={styles.slide}
            >
              <View style={styles.viewContainer}>
                <View style={{ paddingBottom: 10 }}>
                  <Text style={styles.text}>Airtime Balance</Text>
                  <Text style={styles.text}>#60.8</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>Buy Bundle</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.text}>Data Balance</Text>
                  <Text style={styles.text}>#60.8</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>Recharge</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.viewText}>
                <Text style={{ fontWeight: "bold" }}>View Details</Text>
              </View>
            </LinearGradient>

            <View style={styles.slide2}>
              <Text style={styles.text}>Slide 2</Text>
            </View>
          </Pinar>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    height: 500,
    marginBottom: 50,
  },
  navContainer: {
    height: 320,
  },
  pulseTxt: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },

  textColor: { color: "white", marginBottom: 10 },
  carouselContainer: {
    flex: 1,
    borderRadius: 10,
    alignSelf: "center",
    maxHeight: 270,
  },
  carouselContainer2: {
    flex: 1,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 230,
    marginTop: 20,
  },
  carousel: {
    width: "100%",
  },
  slide: {
    height: 180,
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 20,
    paddingLeft: 10,
    marginRight: 10,
  },
  divider: {
    height: 150,
    width: 2,
    backgroundColor: "#000",
    marginTop: 20,
    marginRight: 50,
  },
  iconNum: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#FFCB06",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  linkNum: {
    padding: 40,
  },
  manageNum: {
    paddingTop: 40,
    paddingLeft: 5,
  },
  slide2: {
    height: 180,
    backgroundColor: "#B6B6B6",
    borderRadius: 10,

    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewText: {
    justifyContent: "center", // centers the content vertically
    alignItems: "center",
  },
  button: {
    height: 40,
    backgroundColor: "black",
    marginTop: 30,
    width: 120,
    borderRadius: 50,
    justifyContent: "center", // centers the content vertically
    alignItems: "center",
  },
  buttonTxt: {
    color: "#FDCB04",
    textAlign: "center",
  },
  dotStyle: {
    backgroundColor: "#333738",
    width: 20,
    height: 2,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: "#FDCB04",
    width: 20,
    height: 2,
    borderRadius: 4,
    marginHorizontal: 3,
  },
});
