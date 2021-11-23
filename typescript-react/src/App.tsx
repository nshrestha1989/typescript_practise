import React,{useState} from "react";
import { Todo } from "./todo.model";

import TodoList from './components/ToDoList'
import NewTodo from "./components/NewTodo";

function App() {
 
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler=(text:string)=>{
    setTodos(prevTodos=>[...prevTodos,{id:Math.random().toString(),text:text}])
  };

  const todoDeleteHandler=(todoId:string)=>{
    setTodos(prevTodos=>{
      return prevTodos.filter(todo=>todo.id!==todoId);
    })
  };
  return <div className="App">
    <NewTodo onAddTodo={todoAddHandler}/>
    <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>;
}

export default App;

