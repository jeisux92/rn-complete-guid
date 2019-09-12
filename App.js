import React from 'react';
import Constants from 'expo-constants';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View
        style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input} />
        <Button title="Add" />
      </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 30,
    paddingRight: 30
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "80%"
  }
})
