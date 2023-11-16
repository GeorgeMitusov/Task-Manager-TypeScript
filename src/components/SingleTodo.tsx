import React, { useState } from 'react';
import { Todo } from './model';
import { MdDone, MdEdit, MdDelete } from "react-icons/md";

interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todos, todo, setTodos } : Props) => {

  const [ isEdit, setIsEdit ] = useState <Boolean> (false);
  const [ editValue, setEditValue ] = useState <string | number> (todo.todo);


  const handleDone = (id: number) => {
    setTodos( todos.map( todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo ) )
  }

  const handleDelete = (id: number) => {
    setTodos( todos.filter( todo => todo.id !== id ));
  }

  const handleEdit = () => {
    setIsEdit( !isEdit );
  }

  const handleEnterPress = ( e: React.KeyboardEvent<HTMLInputElement>, id: number ) => {

    if ( e.key === "Enter" ) {

      setTodos( todos.map( todo => todo.id === id ? { ...todo, todo: String(editValue) } : todo ) )

      handleEdit();
      
      setEditValue('');
    }
  }

  const todoTitle = (
    <span 
      className="todos__single--text" 
      style={{ textDecoration: todo.isDone ? "line-through" : 'none' }}
    > { todo.todo } </span>
  )

  const todoInput = (
    <input 
      type="text"
      value={editValue}
      onChange={ e => setEditValue(e.target.value) }
      onKeyDown={ e => handleEnterPress(e, todo.id) } 
      className="todos-single-form-input" 
    />
  )

  return (
    <form className="todos__single">

      { isEdit ? todoInput : todoTitle }

      <div>
        <span className="icon" onClick={handleEdit}> <MdEdit /> </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}> <MdDelete /> </span>
        <span className="icon" onClick={ () => handleDone(todo.id)}> <MdDone /> </span>
      </div>


    </form>
  )
}

export default SingleTodo;