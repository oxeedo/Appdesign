import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

import Play from "./bottompages/Play";
import Help from "./bottompages/Help";
import More from "./bottompages/More";
import play from "../assets/play.png";
import more from "../assets/more.png";
import help from "../assets/help.png";
import HomePage from "../pages/HomePage";

const Tab = createBottomTabNavigator();
const _renderIcon = (routeName, selectedTab) => {
  let icon = "";
  let isAssetIcon = false; // Flag to determine if the icon is an asset

  switch (routeName) {
    case "Home":
      icon = "home"; // Use the appropriate icon name for home
      break;
    case "Play":
      icon = play; // Use the asset icon for play
      isAssetIcon = true;
      break;
    case "Help":
      icon = help; // Use the asset icon for play
      isAssetIcon = true;
      break;
    case "More":
      icon = more; // Use the asset icon for play
      isAssetIcon = true;
      break;
  }
  if (isAssetIcon) {
    return (
      <Image
        source={icon}
        style={{
          width: 30,
          height: 30,
          tintColor: routeName === selectedTab ? "#FDCB04" : "gray",
        }}
      />
    );
  }

  return (
    <Ionicons
      name={icon}
      size={30}
      color={routeName === selectedTab ? "#FDCB04" : "gray"}
    />
  );
};
const renderTabBar = ({ routeName, selectedTab, navigate }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={styles.tabbarItem}
    >
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        height={400}
        circleWidth={100}
        bgColor="#333738"
        initialRouteName="Home"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Click Action")}
            >
              <Ionicons name={"add-sharp"} color="#181818" size={30} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="Home"
          position="LEFT"
          options={{ headerShown: false }}
          component={() => <HomePage />}
        />
        <CurvedBottomBarExpo.Screen
          options={{ headerShown: false }}
          name="Play"
          component={() => <Play />}
          position="LEFT"
        />
        <CurvedBottomBarExpo.Screen
          options={{ headerShown: false }}
          name="Help"
          component={() => <Help />}
          position="RIGHT"
        />
        <CurvedBottomBarExpo.Screen
          options={{ headerShown: false }}
          name="More"
          component={() => <More />}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
    </NavigationContainer>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {
    backgroundColor: "#121213",
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDCB04",
    bottom: 30,
    marginLeft: 10,
    marginRight: 10,
  },

  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
});
