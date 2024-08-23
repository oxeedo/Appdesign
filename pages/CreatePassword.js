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
  const { firstname, lastname, email } = route.params;

  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

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
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      isValid:
        password.length >= minLength &&
        password.length <= maxLength &&
        hasLowercase &&
        hasUppercase &&
        hasNumber &&
        hasSpecialChar,
      length: password.length >= minLength && password.length <= maxLength,
      lowercase: hasLowercase,
      uppercase: hasUppercase,
      number: hasNumber,
      specialChar: hasSpecialChar,
    };
  };

  useEffect(() => {
    const result = validatePassword(password);
    setIsPasswordValid(result.isValid);
    setPasswordCriteria(result);
  }, [password]);

  const handleSignup = async () => {
    if (!isPasswordValid) {
      alert("Your password does not meet the required criteria.");
      return;
    }

    if (!isTermsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    // Construct the request payload
    const payload = {
      firstname,
      lastname,
      email,
      password,
    };

    try {
      // Replace with your API endpoint
      const response = await fetch("http://192.168.43.200:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Handle success, for example, navigate to the success page
        navigation.navigate("successPage");
      } else {
        // Handle error response
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.message}`);
      }
    } catch (error) {
      // Handle network or other errors
      alert(`An error occurred: ${error.message}`);
    }
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
        <View style={styles.criteriaContainer}>
          <View style={styles.criteriaItem}>
            <View
              style={[
                styles.iconWrapper,
                {
                  borderColor: passwordCriteria.length ? "green" : "red",
                },
              ]}
            >
              <Icon
                name={passwordCriteria.length ? "checkmark" : "close"}
                size={20}
                color={passwordCriteria.length ? "green" : "red"}
              />
            </View>
            <Text style={styles.criteriaText}>8-32 characters</Text>
          </View>
          <View style={styles.criteriaItem}>
            <View
              style={[
                styles.iconWrapper,
                {
                  borderColor: passwordCriteria.lowercase ? "green" : "red",
                },
              ]}
            >
              <Icon
                name={passwordCriteria.lowercase ? "checkmark" : "close"}
                size={20}
                color={passwordCriteria.lowercase ? "green" : "red"}
              />
            </View>
            <Text style={styles.criteriaText}>
              At least one lowercase letter
            </Text>
          </View>
          <View style={styles.criteriaItem}>
            <View
              style={[
                styles.iconWrapper,
                {
                  borderColor: passwordCriteria.uppercase ? "green" : "red",
                },
              ]}
            >
              <Icon
                name={passwordCriteria.uppercase ? "checkmark" : "close"}
                size={20}
                color={passwordCriteria.uppercase ? "green" : "red"}
              />
            </View>
            <Text style={styles.criteriaText}>
              At least one uppercase letter
            </Text>
          </View>
          <View style={styles.criteriaItem}>
            <View
              style={[
                styles.iconWrapper,
                {
                  borderColor: passwordCriteria.number ? "green" : "red",
                },
              ]}
            >
              <Icon
                name={passwordCriteria.number ? "checkmark" : "close"}
                size={20}
                color={passwordCriteria.number ? "green" : "red"}
              />
            </View>
            <Text style={styles.criteriaText}>At least one number</Text>
          </View>
          <View style={styles.criteriaItem}>
            <View
              style={[
                styles.iconWrapper,
                {
                  borderColor: passwordCriteria.specialChar ? "green" : "red",
                },
              ]}
            >
              <Icon
                name={passwordCriteria.specialChar ? "checkmark" : "close"}
                size={20}
                color={passwordCriteria.specialChar ? "green" : "red"}
              />
            </View>
            <Text style={styles.criteriaText}>
              At least one special character (e.g., @)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.NoAccount}>
        <Check
          label="I accept the terms and conditions"
          checked={isTermsAccepted}
          onChange={handleCheckboxChange}
        />
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
          style={{ marginTop: 2 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePassword;
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
  criteriaContainer: {
    paddingTop: 10,
  },
  criteriaText: {
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },
  criteriaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    padding: 5,
  },
  iconWrapper: {
    borderWidth: 2, // Border width
    borderRadius: 20, // Adjusted for better circular shape
    padding: 1, // Padding inside the border
    alignItems: "center", // Center the icon horizontally
    justifyContent: "center", // Center the icon vertically
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
    alignItems: "flex-start", // Corrected alignment
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
    marginTop: 10,
    paddingLeft: 30,
  },
});
