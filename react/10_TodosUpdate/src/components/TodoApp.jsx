// src/components/TodoApp.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, selectTodos } from '../redux/todoSlice';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const [newTodo, setNewTodo] = useState('');
  const [updateTodoId, setUpdateTodoId] = useState('');
  const [updatedTodoText, setUpdatedTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: newTodo }));
      setNewTodo('');
    }
  };

  const handleUpdateTodo = () => {
    if (updateTodoId) {
      dispatch(
        updateTodo({
          id: Number(updateTodoId),
          updatedTodo: { text: updatedTodoText },
        })
      );
      setUpdateTodoId('');
      setUpdatedTodoText('');
    }
  };
  console.log(todos)
  return (
    <div>
      <h1>Todo App</h1>

      <div>
        <h2>Add Todo</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div>
        <h2>Update Todo</h2>
        <select
          value={updateTodoId}
          onChange={(e) => setUpdateTodoId(e.target.value)}
        >
          <option value="">Select Todo</option>
          {todos.map((todo) => (
            <option key={todo.id} value={todo.id}>
              {todo.text}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={updatedTodoText}
          onChange={(e) => setUpdatedTodoText(e.target.value)}
        />
        <button onClick={handleUpdateTodo}>Update Todo</button>
      </div>

      <div>
        <h2>Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
