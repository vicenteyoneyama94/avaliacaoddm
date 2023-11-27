import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import TodoService from '../services/TodoService';

const AddTaskScreen = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = async () => {
    if (taskTitle.trim() !== '') {
      try {
        const newTask = await TodoService.createTodo({
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
    <View>
      <TextInput
        placeholder="Digite uma nova tarefa"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}
      />
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
    </View>
  );
};

export default AddTaskScreen;