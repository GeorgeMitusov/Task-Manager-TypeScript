import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import { AnimatePresence, motion } from "framer-motion";
import Search from "./Search";
import "../styles/TodoList.scss";

interface Props {
  todos: Todo[];
  todosDispatch: React.Dispatch<any>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  isDoneShowing: boolean;
  setIsDoneShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  todosDispatch,
  searchValue,
  setSearchValue,
  isSearching,
  setIsSearching,
  isDoneShowing,
  setIsDoneShowing,
}) => {
  const searchFilter = todos.filter((item) =>
    item.todo.toLowerCase().includes(searchValue.toLowerCase())
  );

  const isDoneToggle = () => {
    setIsDoneShowing((prevIsDoneShowing) => !prevIsDoneShowing);
  };

  const arrCheck = searchFilter.length === 0 ? todos : searchFilter;

  const doneFilter = todos.filter((item) => item.isDone && item);

  const universalTodo = (array: Todo[]) =>
    array.map((todo) => (
      <SingleTodo key={todo.id} todo={todo} todosDispatch={todosDispatch} />
    ));

  return (
    <div className="todos">
      <motion.div
        className="todos-container"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 1, delay: 1 }}
      >
        <span className="todos-title"> Active tasks</span>{" "}
        <button className="btn-show-done" onClick={isDoneToggle}>
          {" "}
          done{" "}
        </button>
        {isDoneShowing ? (
          <AnimatePresence>
            <>
              {doneFilter.length === 0 && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                >
                  {" "}
                  List of completed tasks is empty.{" "}
                </motion.h1>
              )}
              {universalTodo(doneFilter)}
            </>
          </AnimatePresence>
        ) : (
          <>
            <Search
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              isSearching={isSearching}
              setIsSearching={setIsSearching}
            />
            <AnimatePresence>
              {todos.length === 0 && (
                <motion.h1
                  className="title-empty"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.5 },
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                >
                  {" "}
                  Your list is empty.{" "}
                </motion.h1>
              )}
            </AnimatePresence>
            <AnimatePresence>{universalTodo(arrCheck)}</AnimatePresence>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default TodoList;

// import React from "react";
// import { Todo } from "./model";
// import SingleTodo from "./SingleTodo";
// import { AnimatePresence, motion } from "framer-motion";
// import Search from "./Search";
// import "../styles/TodoList.scss";

// interface Props {
//   todos: Todo[];
//   todosDispatch: React.Dispatch<any>;
//   setSearchValue: React.Dispatch<React.SetStateAction<string>>;
//   searchValue: string;
//   isSearching: boolean;
//   setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
//   isDoneShowing: boolean;
//   setIsDoneShowing: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const TodoList: React.FC<Props> = ({
//   todos,
//   todosDispatch,
//   searchValue,
//   setSearchValue,
//   isSearching,
//   setIsSearching,
//   isDoneShowing,
//   setIsDoneShowing,
// }) => {
//   const searchFilter = todos.filter((item) =>
//     item.todo.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   const isDoneToggle = () => {
//     setIsDoneShowing((prevIsDoneShowing) => !prevIsDoneShowing);
//   };

//   const arrCheck = searchFilter.length === 0 ? todos : searchFilter;

//   const todo = arrCheck.map((todo) => (
//     <SingleTodo key={todo.id} todo={todo} todosDispatch={todosDispatch} />
//   ));

//   const doneFilter = todos.filter((item) => item.isDone && item);

//   const doneTodo = doneFilter.map((todo) => (
//     <SingleTodo key={todo.id} todo={todo} todosDispatch={todosDispatch} />
//   ));

//   return (
//     <div className="todos">
//       <motion.div
//         className="todos-container"
//         initial={{ y: -300, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ ease: "linear", duration: 1, delay: 1 }}
//       >
//         <span className="todos-title"> Active tasks</span>{" "}
//         <button className="btn-show-done" onClick={isDoneToggle}>
//           {" "}
//           done{" "}
//         </button>
//         {isDoneShowing ? (
//           doneTodo
//         ) : (
//           <>
//             <Search
//               searchValue={searchValue}
//               setSearchValue={setSearchValue}
//               isSearching={isSearching}
//               setIsSearching={setIsSearching}
//             />
//             <AnimatePresence>
//               {todos.length === 0 && (
//                 <motion.h1
//                   className="title-empty"
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                     transition: { duration: 0.5, delay: 0.5 },
//                   }}
//                   exit={{ opacity: 0 }}
//                   transition={{ ease: "linear", duration: 0.5 }}
//                 >
//                   {" "}
//                   Your list is empty.{" "}
//                 </motion.h1>
//               )}
//             </AnimatePresence>
//             <AnimatePresence>{todo}</AnimatePresence>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default TodoList;

// import React from "react";
// import { Todo } from "./model";
// import SingleTodo from "./SingleTodo";
// import { AnimatePresence, motion } from "framer-motion";
// import Search from "./Search";
// import "../styles/TodoList.scss";

// interface Props {
//   todos: Todo[];
//   todosDispatch: React.Dispatch<any>;
//   setSearchValue: React.Dispatch<React.SetStateAction<string>>;
//   searchValue: string;
//   isSearching: boolean;
//   setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
//   isDoneShowing: boolean;
//   setIsDoneShowing: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const TodoList: React.FC<Props> = ({
//   todos,
//   todosDispatch,
//   searchValue,
//   setSearchValue,
//   isSearching,
//   setIsSearching,
//   isDoneShowing,
//   setIsDoneShowing,
// }) => {
//   const searchFilter = todos.filter((item) =>
//     item.todo.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   const isDoneToggle = () => {
//     setIsDoneShowing((prevIsDoneShowing) => !prevIsDoneShowing);
//   };

//   const arrCheck = searchFilter.length === 0 ? todos : searchFilter;

//   const todo = arrCheck.map((todo) => (
//     <SingleTodo key={todo.id} todo={todo} todosDispatch={todosDispatch} />
//   ));

//   const doneFilter = todos.filter((item) => item.isDone && item);

//   const doneTodo = doneFilter.map((todo) => (
//     <SingleTodo key={todo.id} todo={todo} todosDispatch={todosDispatch} />
//   ));

//   return (
//     <div className="todos">
//       <motion.div
//         className="todos-container"
//         initial={{ y: -300, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ ease: "linear", duration: 1, delay: 1 }}
//       >
//         <span className="todos-title"> Active tasks</span>{" "}
//         <button className="btn-show-done" onClick={isDoneToggle}>
//           {" "}
//           done{" "}
//         </button>
//         {isDoneShowing && doneTodo}
//         <Search
//           searchValue={searchValue}
//           setSearchValue={setSearchValue}
//           isSearching={isSearching}
//           setIsSearching={setIsSearching}
//         />
//         <AnimatePresence>
//           {todos.length === 0 && (
//             <motion.h1
//               className="title-empty"
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: 1,
//                 transition: { duration: 0.5, delay: 0.5 },
//               }}
//               exit={{ opacity: 0 }}
//               transition={{ ease: "linear", duration: 0.5 }}
//             >
//               {" "}
//               Your list is empty.{" "}
//             </motion.h1>
//           )}
//         </AnimatePresence>
//         <AnimatePresence>{todo}</AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default TodoList;
