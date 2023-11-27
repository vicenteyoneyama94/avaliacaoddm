import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import TodoController from '../controller/TodoController';

const AddTaskScreen = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = async () => {
    if (taskTitle.trim() !== '') {
      try {
        const newTask = await TodoController .createTodo({
          item: taskTitle,
        });
        onAddTask(newTask);
        setTaskTitle('');
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite uma nova tarefa"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}
      /><br></br>
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AddTaskScreen;