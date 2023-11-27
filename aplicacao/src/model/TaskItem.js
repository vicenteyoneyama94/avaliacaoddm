import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TodoController from '../controller/TodoController';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {

  const handleDelete = async (taskId) => {
    try {
      await TodoController.deleteTodo(taskId);
      onDelete(taskId);
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
    }
  };

  const handleUpdate = async (taskId) => {
    try {
      await TodoController.updateTodo(taskId);
      onUpdate(taskId);
    } catch (error) {
      console.error('Erro ao alterar a tarefa:', error);
    }
  };

  const handleToggleComplete = async (taskId) => {
    try {
      await TodoController.updateTodo(taskId, { completed: !task.completed });
      onToggleComplete(taskId);
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleToggleComplete(task.id)}>
        <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
          {task.item}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(task.id)}>
        <Text style={{ color: 'red' }}>Excluir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleUpdate(taskid)}>
        <text style={{ color: 'blue'}}>Alterar</text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default TaskItem;