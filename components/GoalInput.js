import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        value={props.value}
        onChangeText={props.onTextChange}
        style={styles.input}
      />
      <View style={{ borderRadius: 15, borderWidth: 1 }}>
        <Button title="Add" onPress={props.onSubmit} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: "80%",
    color: "white",
    paddingHorizontal: 10
  }
});
export default GoalInput;
