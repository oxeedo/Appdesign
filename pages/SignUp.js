import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons"; // or another icon library
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleNextButton = () => {
    if (isFormValid) {
      navigation.navigate("createPassword", {
        name: name,
        lastName: lastName,
        email: email,
      });
    } else {
      Alert.alert("Signup Failed", "Please fill out all fields");
    }
  };

  const isFormValid = name && lastName && email;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "700" }}>Help</Text>
      </View>
      <View style={styles.signInCont}>
        <Text style={styles.signInText}>Sign Up</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.signInText2}>Put in your account details to</Text>
          <Text style={{ fontWeight: "bold", marginLeft: 5 }}>get started</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ fontWeight: "700", paddingBottom: 10 }}>
          First Name:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
        <Text style={{ fontWeight: "700", paddingBottom: 10 }}>Last Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setlastName}
          autoCapitalize="words"
        />
        <Text style={{ fontWeight: "700", paddingBottom: 10 }}>
          Email Address:
        </Text>
        <TextInput
          style={[
            styles.input,
            isFocused && { borderColor: "#808080" }, // Change to your focus color
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity onPress={handleNextButton} disabled={!isFormValid}>
        <View
          style={[
            styles.buttonCont,
            { backgroundColor: isFormValid ? "#CE0001" : "#E5E5E5" },
          ]}
        >
          <Text style={styles.buttonText}>Next</Text>
          <Icon
            name="chevron-forward"
            size={24}
            color="#fff"
            style={{ marginTop: 2, fontWeight: "900" }}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.NoAccount}>
        <TouchableOpacity onPress={() => navigation.navigate("successPage")}>
          <Text>
            Already have an account?
            <Text style={{ color: "red", paddingLeft: 0 }}> Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF",
    flex: 1,
  },
  iconContainer: {
    paddingLeft: 20,
    paddingTop: 60,
    paddingRight: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  signInCont: {
    paddingTop: 30,
    paddingLeft: 20,
  },
  signInText: {
    fontSize: 35,
    fontWeight: "800",
  },
  signInText2: {
    fontSize: 16,
    color: "gray",
  },
  inputContainer: {
    marginTop: 70,
    alignItems: "left",
    paddingLeft: 20,
  },
  input: {
    height: 50,
    width: "95%",
    borderColor: "#808080",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    marginRight: -2,
  },
  buttonCont: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
    flexDirection: "row",
  },
  NoAccount: {
    marginTop: 100,
    alignItems: "center",
  },
});
