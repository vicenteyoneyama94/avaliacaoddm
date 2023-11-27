import axios from 'axios';

const URL_API = 'http://localhost:8080/api/todo';

const TodoController = {

  getTodoList: async () => {
    try {
      const response = await axios.get(`${URL_API}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createTodo: async (todoData) => {
    try {
      const response = await axios.post(`${URL_API}`, todoData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateTodo: async (updatedTodoData) => {
    try {
      const response = await axios.put(`${URL_API}`, updatedTodoData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteTodo: async (todoId) => {
    try {
      const response = await axios.delete(`${URL_API}/${todoId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default TodoController;





