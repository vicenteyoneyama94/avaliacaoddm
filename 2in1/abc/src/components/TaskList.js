import React from 'react';
import { View, FlatList } from 'react-native';
import TaskItem from './TaskItem';
import TodoService from '../services/TodoService';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
  
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
      await TodoService.updateTodo(taskId, { completed: !tasks.find(task => task.id === taskId).completed });
      onToggleComplete(taskId);
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
    }
  };

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={handleDelete} onToggleComplete={handleToggleComplete} />
        )}
      />
    </View>
  );
};

export default TaskList;