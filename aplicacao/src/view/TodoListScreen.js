import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TaskList from './TaskList';
import AddTaskScreen from '../model/AddTaskScreen';
import TodoController from '../controller/TodoController';

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await TodoService.getTodoList();
      setTodos(data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (newTask) => {
    setTodos((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = async (taskId) => {
    try {
      await TodoController.deleteTodo(taskId);
      setTodos((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
    }
  };

  const toggleComplete = async (taskId) => {
    try {
      const updatedTask = await TodoController.updateTodo(taskId, {
        completed: !todos.find(task => task.id === taskId).completed,
      });
      setTodos((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? updatedTask : task
        )
      );
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
    }
  };

  return (
    <View>
      <AddTaskScreen onAddTask={addTask} />
      <TaskList tasks={todos} onDelete={deleteTask} onToggleComplete={toggleComplete} />
    </View>
  );
};

export default TodoListScreen;