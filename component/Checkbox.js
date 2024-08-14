import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const checkbox = ({ label, checked, onChange }) => {
  return (
    <TouchableOpacity onPress={onChange} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Icon name="checkmark" size={18} color="#fff" />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#CE0001",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  checked: {
    backgroundColor: "#CE0001",
  },
  label: {
    fontSize: 16,
  },
});

export default checkbox;
