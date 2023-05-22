// import { useContext } from "react"
// import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {

    // const { todoState } = useContext( TodoContext );
    // const { todos } = todoState;
    // Se comentaron estas lineas de codigo gracias a que se realizo un custom hook para poder traer los todos
    const { todos } = useTodos();
    

  return (
    <ul>
        { 
            todos.map( todo => <TodoItem key={ todo.id } todo={ todo } />)
        }
    </ul>
  )
}
