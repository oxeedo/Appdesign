import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons"; // or another icon library
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLogin = () => {
    if (email === "test@example.com" && password === "password") {
      Alert.alert("Login Successful", "Welcome!");
    } else {
      Alert.alert("Login Failed", "Invalid credentials");
    }
  };
  const handleBackPress = () => {
    // Handle back navigation here
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "700" }}>Help</Text>
      </View>
      <View style={styles.signInCont}>
        <Text style={styles.signInText}>Sign In</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.signInText2}>Put in your account details to</Text>
          <Text style={{ fontWeight: "bold", marginLeft: 5 }}>get started</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ fontWeight: "700", paddingBottom: 5 }}>
          Email Address:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={{ fontWeight: "700", paddingBottom: 5 }}>Password:</Text>

        <View style={styles.passCont}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry} // Update this line
            style={{ flex: 1 }} // Added to ensure the TextInput takes the available space
          />
          <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.icon}>
            <Icon
              name={secureTextEntry ? "eye-off" : "eye"}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.forgotPass}>
        <Text style={{ color: "red", marginLeft: 200 }}>Forgot Password</Text>
      </View>
      <View style={styles.buttonCont}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "900" }}>
          Sign In
        </Text>
      </View>
      <View style={styles.NoAccount}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text>
            Don't have an account?
            <Text style={{ color: "red", paddingLeft: 0 }}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },

  passCont: {
    flexDirection: "row",
    alignItems: "center", // Vertically align the input and icon
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "95%",
    justifyContent: "space-between",
    height: 50,
    marginBottom: 5,
  },
  forgotPass: {
    alignItems: "center",
  },

  buttonCont: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#E5E5E5",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
  },
  NoAccount: {
    marginTop: 100,
    alignItems: "center",
  },
});
