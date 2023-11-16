
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
  const [ editValue, setEditValue ] = useState <string | number> ('');


  const handleDone = (id: number) => {
    setTodos( todos.map( todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo ) )
  }

  const handleDelete = (id: number) => {
    setTodos( todos.filter( todo => todo.id !== id ));
  }

  const handleEdit = ( id?: number ) => {
    setIsEdit( !isEdit );

    if ( id ) {
      const filteredTodo = todos.find( todo => todo.id === id);
      if ( filteredTodo ) {
        setEditValue(filteredTodo.todo);
      }
    }
  }

  const handleEnterPress = ( e: React.KeyboardEvent<HTMLInputElement>, id: number ) => {

    if ( e.key === "Enter" ) {

      setTodos( todos.map( todo => todo.id === id ? { ...todo, todo: String(editValue) } : todo ) )

      handleEdit();
      
      setEditValue('');
    }
  }

  const handleInput = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setEditValue(e.target.value);
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
      onChange={ e => handleInput(e) }
      onKeyDown={ e => handleEnterPress(e, todo.id) } 
      className="todos-single-form-input" 
    />
  )

  return (
    <form className="todos__single">

      { isEdit ? todoInput : todoTitle }

      <div>
        <span className="icon" onClick={() => handleEdit(todo.id)}> <MdEdit /> </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}> <MdDelete /> </span>
        <span className="icon" onClick={ () => handleDone(todo.id)}> <MdDone /> </span>
      </div>


    </form>
  )
}

export default SingleTodo;
