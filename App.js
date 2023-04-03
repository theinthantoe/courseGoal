import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
// import { Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  // const [visiable, setVisiable] = useState(false);

  // const startVisiable = () => {
  //   setVisiable(true);
  // };
  const addGoalHandler = (enteredGoal) => {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  };
  const deleteGoalHandler = (id) => {
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.appContainer}>
      {/* <Button
        title="Add new Goal"
        color={"#5e0acc"}
        onPress={startVisiable}
        style={styles.newContainer}
      /> */}
      <GoalInput addGoal={addGoalHandler} />
      <FlatList
        data={courseGoal}
        renderItem={(itemData) => {
          return (
            <View>
              <GoalItem
                item={itemData.item.text}
                id={itemData.item.id}
                deleteGoal={deleteGoalHandler}
              />
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 10,
    padding: 50,
  },
  newContainer: {
    flex: 0,
  },
});
