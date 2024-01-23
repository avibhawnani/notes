// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
