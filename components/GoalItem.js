import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
const GoalItem = (props) => {
  return (
    <Pressable
      android_ripple={"#ffffff"}
      onPress={props.deleteGoal.bind(this, props.id)}
    >
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>{props.item}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  goalContainer: {
    flex: 3,
    backgroundColor: "#5e0acc",
    padding: 8,
    border: 6,
    margin: 8,
    borderRadius: 5,
  },
  goalText: {
    color: "#fff",
  },
});
