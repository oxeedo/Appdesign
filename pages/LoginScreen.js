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
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const normalizedEmail = email.trim().toLowerCase();

  const handleLogin = async () => {
    try {
      console.log("Attempting login with:", normalizedEmail, password);
      const response = await fetch("http://192.168.43.200:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const firstname = data.user.firstname; // Extract the firstname
        navigation.navigate("home", { firstname });
        // console.log(data.user);
        // console.log(firstname);
      } else {
        const errorData = await response.json();
        console.log("Login Failed:", errorData);

        if (response.status === 401) {
          Alert.alert("Login Failed", "Invalid credentials");
        } else {
          Alert.alert("Error", errorData.message || "Something went wrong");
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
      Alert.alert("Error", "Network or server error");
    }
  };
  const isFormValid = email && password;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
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
            secureTextEntry={secureTextEntry}
            style={{ flex: 1 }}
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
      <TouchableOpacity onPress={handleLogin} disabled={!isFormValid}>
        <View
          style={[
            styles.buttonCont,
            { backgroundColor: isFormValid ? "#CE0001" : "#E5E5E5" },
          ]}
        >
          <Text style={styles.buttonText}>Sign In</Text>
          <Icon
            name="chevron-forward"
            size={24}
            color="#fff"
            style={{ marginTop: 2, fontWeight: "900" }}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.NoAccount}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text>
            Don't have an account?
            <Text style={{ color: "red", paddingLeft: 5 }}> Sign Up</Text>
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
    alignItems: "flex-start",
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
    alignItems: "center",
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
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    marginRight: -2, // Consider adjusting or removing this
  },
  NoAccount: {
    marginTop: 100,
    alignItems: "center",
  },
});
