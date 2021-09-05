import React, { useState } from 'react';
import './App.scss';
import TodoItem from './components/TodoItem/TodoItem';
import { Todo } from './shared/todo';


const todos: Todo[] = [
  {id: '1', text: 'Todo 1', done: false},
  {id: '2', text: 'Todo 2', done: false},
  {id: '3', text: 'Todo 3', done: false},
  {id: '4', text: 'Todo 4', done: false},
  {id: '5', text: 'Todo 5', done: false},
];

function App({}) {
  const [todoList, setTodoList] = useState(todos);

  const handleToggle = (todoItem: {}) => {
    const todoDone = todoList.map(todo => {
      if (todo === todoItem) {
        return {...todo, done: !todo.done};
      };
      return todo;
    })

    setTodoList(todoDone);
  }

  return (
    <div className="App">
      {
        todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle}/>
        ))
      }
    </div>
  );
}

export default App;
