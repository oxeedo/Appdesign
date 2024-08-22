import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"; // or another icon library

const SuccessPage = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "700" }}>Help</Text>
      </View>

      <Image source={require("../assets/congrats.png")} style={styles.image} />
      <Text style={styles.signText}>Thank you for signing up!!</Text>
      <Text style={styles.signText2}>
        Please check your mail to verify your account
      </Text>
      <View style={styles.resendMail}>
        <Text style={styles.signText3}>Didn't recieve any mail?</Text>
        <Text style={{ paddingLeft: 3, color: "#CE0001" }}>Resend</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <View style={styles.buttonCont}>
          <Icon
            name="chevron-back"
            size={24}
            color="#CE0001"
            style={{ marginTop: 2, fontWeight: "900" }}
          />
          <Text style={styles.buttonText}>Back to Sign In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FFFF",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    height: 220,
    width: 220,
    marginTop: 50,
    alignSelf: "center",
  },
  signText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  signText2: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
  },
  signText3: {
    fontSize: 15,
    paddingLeft: 10,
  },
  resendMail: {
    flexDirection: "row",
    marginTop: 120,
    alignSelf: "center",
  },
  buttonCont: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderColor: "#gray",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#FFF",
    elevation: 1,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
    marginRight: -2,
  },
});
