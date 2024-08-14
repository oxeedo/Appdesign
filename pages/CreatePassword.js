import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons"; // or another icon library
import { useNavigation } from "@react-navigation/native";
import Check from "../component/Check";
import { useRoute } from "@react-navigation/native";

const CreatePassword = () => {
  const route = useRoute();
  const { name, lastName, email } = route.params;

  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleCheckboxChange = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 32;
    const hasLowercase = /[a-z]/;
    const hasUppercase = /[A-Z]/;
    const hasNumber = /\d/;
    const hasSpecialChar = /[@#$%^&*(),.?":{}|<>]/;

    return (
      password.length >= minLength &&
      password.length <= maxLength &&
      hasLowercase.test(password) &&
      hasUppercase.test(password) &&
      hasNumber.test(password) &&
      hasSpecialChar.test(password)
    );
  };

  useEffect(() => {
    setIsPasswordValid(validatePassword(password));
  }, [password]);

  const handleSignup = () => {
    if (!isPasswordValid) {
      alert("Your password does not meet the required criteria.");
      return;
    }

    if (!isTermsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    navigation.navigate("homePage");
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
        <Text style={styles.signInText}>Create Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ fontWeight: "700", paddingBottom: 5 }}>
          Login Password:
        </Text>
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
        <Text style={{ fontWeight: "700", paddingTop: 25, fontSize: 18 }}>
          Your password must contain:
        </Text>
        <Text style={{ fontSize: 16, padding: 5 }}>• 8-32 characters</Text>
        <Text style={{ fontSize: 16, padding: 5 }}>
          • At least one lowercase letter
        </Text>
        <Text style={{ fontSize: 16, padding: 5 }}>
          • At least one uppercase letter
        </Text>
        <Text style={{ fontSize: 16, padding: 5 }}>• At least one number</Text>
        <Text style={{ fontSize: 16, padding: 5 }}>
          • At least one special character (e.g., @)
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleSignup}
        disabled={!isPasswordValid || !isTermsAccepted}
        style={[
          styles.buttonCont,
          {
            backgroundColor:
              isPasswordValid && isTermsAccepted ? "#CE0001" : "#E5E5E5",
          },
        ]}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
        <Icon
          name="chevron-forward"
          size={24}
          color="#fff"
          style={{ marginTop: 2, fontWeight: "900" }}
        />
      </TouchableOpacity>
      <View style={styles.NoAccount}>
        <Check
          label="I accept the terms and conditions"
          checked={isTermsAccepted}
          onChange={handleCheckboxChange}
        />
      </View>
    </View>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  container: {},
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
    fontSize: 30,
    fontWeight: "800",
  },

  inputContainer: {
    marginTop: 50,
    alignItems: "left",
    paddingLeft: 20,
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
