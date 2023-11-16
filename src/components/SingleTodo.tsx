import React, { useEffect, useRef, useState } from 'react';
import { Todo } from './model';
import { MdDone, MdEdit, MdDelete } from "react-icons/md";

const SingleTodo = () => {


  return (
    <form className="todos__single">

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