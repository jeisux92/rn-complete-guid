import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = props => (
  <View style={styles.listItem}>
    <Text style={styles.input}>{props.value}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    borderRadius: 5
  },
  input: {
    color: "white"
  }
});

export default GoalItem;
