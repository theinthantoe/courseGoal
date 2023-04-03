import React from "react";
import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.addGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    // <Modal visiable={props.visiable}>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your Course goals"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="add Goal" onPress={addGoalHandler} />
    </View>
    // </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    // marginBottom: 15,
  },
  textInput: {
    width: "60%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    marginRight: 8,
  },
});
