import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const toggleModalVisibility = () =>
    setModalIsVisible((currentModalVisibility) => !currentModalVisibility);

  const handleButtonPress = (goal) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goal, id: Math.random().toString() },
    ]);
    toggleModalVisibility();
  };

  const onDeleteItem = (id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={toggleModalVisibility}
        />
        <GoalInput
          onAddGoal={handleButtonPress}
          onCancel={toggleModalVisibility}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item: { text, id } }) => (
              <GoalItem text={text} id={id} onPress={onDeleteItem} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
