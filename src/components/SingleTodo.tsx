import React, { useEffect, useRef, useState } from 'react';
import { Todo } from './model';
import { MdDone, MdEdit, MdDelete } from "react-icons/md";
import { ACTIONS } from '../actions/actions';

interface Props {
  todo: Todo,
  dispatch: React.Dispatch<any>
}

const SingleTodo = ({ todo, dispatch } : Props ) => {

  const [ isEdit, setIsEdit] = useState<Boolean>(false);
  const [ editValue, setEditValue] = useState<string>(todo.todo);
  const inputRef = useRef <HTMLInputElement> (null)

  function handleDone(id:number) {
    dispatch({ type: ACTIONS.COMPLETE_TODO, payload: id })
  }

  function handleRemove(id:number) {
    dispatch({ type: ACTIONS.REMOVE_TODO, payload: id })
  }

  function handleEditing() {
    if ( !isEdit && !todo.isDone ) {
      setIsEdit( !isEdit );
    }
  }

  function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>, id: number) {

    if ( e.key === "Enter" ) {
      setIsEdit(false);

      dispatch({ type: ACTIONS.EDIT_TODO, payload: { value: editValue, id } })
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
      ref={inputRef}
      onChange={ e => setEditValue(e.target.value) }
      onKeyDown={ e => handleEnterPress(e, todo.id) } 
      className="todos-single-form-input" 
    />
  )

  useEffect(() => {

    inputRef.current?.focus();
   
  }, [isEdit])
  

  return (
    <form className="todos__single">

      { isEdit ? todoInput : todoTitle }

      <div>
         <span className="icon" onClick={handleEditing}> <MdEdit /> </span>
         <span className="icon"  onClick={ () => handleRemove(todo.id)}> <MdDelete /> </span>
         <span className="icon" onClick={ () => handleDone(todo.id)}> <MdDone /> </span>
       </div>
    </form>
  )
}

export default SingleTodo;


// import React, { useEffect, useRef, useState } from 'react';
// import { Todo } from './model';
// import { MdDone, MdEdit, MdDelete } from "react-icons/md";

// interface Props {
//   todo: Todo,
//   todos: Todo[],
//   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
// }

// const SingleTodo = ({ todos, todo, setTodos } : Props) => {

//   const [ isEdit, setIsEdit ] = useState <Boolean> (false);
//   const [ editValue, setEditValue ] = useState <string | number> (todo.todo);
//   const inputRef = useRef <HTMLInputElement> (null);

//   const handleDone = (id: number) => {
//     setTodos( todos.map( todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo ) )
//   }

//   const handleDelete = (id: number) => {
//     setTodos( todos.filter( todo => todo.id !== id ));
//   }

//   const handleEdit = () => {

//     if ( !isEdit && !todo.isDone ) {
//       setIsEdit( !isEdit );
//     } 
//   }

//   useEffect(() => {

//     inputRef.current?.focus();

//   }, [isEdit])
  

//   const handleEnterPress = ( e: React.KeyboardEvent<HTMLInputElement>, id: number ) => {

//     if ( e.key === "Enter" ) {

//       if ( !editValue ) {
//         alert("Can't be empty.");
//         e.preventDefault();
//       } else {

//         setTodos( todos.map( todo => todo.id === id ? { ...todo, todo: String(editValue) } : todo ) )
        
//         setIsEdit(false);
//       }
//     }
//   }

//   const todoTitle = (
//     <span 
//       className="todos__single--text" 
//       style={{ textDecoration: todo.isDone ? "line-through" : 'none' }}
//     > { todo.todo } </span>
//   )

//   const todoInput = (
//     <input 
//       type="text"
//       ref={inputRef}
//       value={editValue}
//       onChange={ e => setEditValue(e.target.value) }
//       onKeyDown={ e => handleEnterPress(e, todo.id) } 
//       className="todos-single-form-input" 
//     />
//   )

//   return (
//     <form className="todos__single">

//       { isEdit ? todoInput : todoTitle }

//       <div>
//         <span className="icon" onClick={handleEdit}> <MdEdit /> </span>
//         <span className="icon" onClick={() => handleDelete(todo.id)}> <MdDelete /> </span>
//         <span className="icon" onClick={ () => handleDone(todo.id)}> <MdDone /> </span>
//       </div>


//     </form>
//   )
// }

// export default SingleTodo;