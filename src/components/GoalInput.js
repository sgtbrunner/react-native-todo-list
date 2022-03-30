import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const GoalImage = require('../../assets/images/goal.png');

const GoalInput = ({ onAddGoal, onCancel, visible }) => {
  const [goal, setGoal] = useState('');

  const addGoalHandler = () => {
    onAddGoal(goal);
    setGoal('');
  };

  return (
    <Modal animationType='slide' visible={visible}>
      <View style={styles.inputContainer}>
        <Image source={GoalImage} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={setGoal}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color='#f31282' title='Cancel' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button color='#b180f0' title='Add Goal' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});

export default GoalInput;
