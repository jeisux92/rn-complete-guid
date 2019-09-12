import React, { useState } from 'react';
import Constants from 'expo-constants';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
    setEnteredGoal("");
  }


  return (
    <View style={styles.screen}>
      <GoalInput onTextChange={goalInputHandler} onSubmit={addGoalHandler} value={enteredGoal} />
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem value={itemData.item.value} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 30,
    paddingRight: 30
  }
})
