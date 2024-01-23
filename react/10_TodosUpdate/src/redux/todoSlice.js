// src/store/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [{id:1,text:"hello"}],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    updateTodo: (state, action) => {
        const { id, updatedTodo } = action.payload;
        
        console.log("id",typeof id)
        state.list = state.list.map((todo) =>
          todo.id === id ? { ...todo,text:updatedTodo.text } : todo
        );
        console.table(updatedTodo);
        console.log("update called")
        console.log("new log",state.list);
      },
  },
});

export const { addTodo, updateTodo } = todosSlice.actions;
export const selectTodos = (state) => state.todos.list;
export default todosSlice.reducer;
