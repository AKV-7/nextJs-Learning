import React from 'react'
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const Todo = () => {
  return (
    <div className="max-w-lg">
      <TodoForm/>
      <Todos/>
    </div>
  )
}

export default Todo