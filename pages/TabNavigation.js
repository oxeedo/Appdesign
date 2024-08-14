import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Hot from "./Hot";
import MTN from "./MTN";
import Fun from "./Fun";
import Transport from "./Transport";
import Shop from "./Shop";

// Tab Navigator
const Tab = createMaterialTopTabNavigator();

const getHeightForRoute = (routeName) => {
  switch (routeName) {
    case "Hot":
      return 400;
    case "MTN":
      return 300;
    case "Fun":
      return 200;
    case "Transport":
      return 200;
    case "Shop":
      return 200;
    default:
      return 200;
  }
};

const TabNavigation = () => {
  const [height, setHeight] = useState(getHeightForRoute("Hot"));

  const handleTabChange = (routeName) => {
    const newHeight = getHeightForRoute(routeName);
    setHeight(newHeight);
  };

  return (
    <Tab.Navigator
      style={[styles.container, { height }]}
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: "none",
          flex: 1,
          justifyContent: "center",
          width: "100%",
          fontWeight: "500",
        },
        tabBarStyle: {
          backgroundColor: "#333738", // Replace with your desired color
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#979797",
        tabBarIndicatorStyle: { backgroundColor: "#FDCB04", height: 2 },
        tabBarPressOpacity: 1,
      })}
      screenListeners={{
        state: (e) => {
          const routeName = e.data.state.routes[e.data.state.index].name;
          handleTabChange(routeName);
        },
      }}
    >
      <Tab.Screen name="Hot" component={Hot} />
      <Tab.Screen name="MTN" component={MTN} />
      <Tab.Screen name="Fun" component={Fun} />
      <Tab.Screen name="Transport" component={Transport} />
      <Tab.Screen name="Shop" component={Shop} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
  },
});
