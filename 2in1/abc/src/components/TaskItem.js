import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TodoService from '../services/TodoService';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {

  const handleDelete = async (taskId) => {
    try {
      await TodoService.deleteTodo(taskId);
      onDelete(taskId);
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
    }
  };

  const handleToggleComplete = async (taskId) => {
    try {
      await TodoService.updateTodo(taskId, { completed: !task.completed });
      onToggleComplete(taskId);
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleToggleComplete(task.id)}>
        <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
          {task.item}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(task.id)}>
        <Text style={{ color: 'red' }}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;