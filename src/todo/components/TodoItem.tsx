// import { useContext } from "react"
import { Todo } from "../interfaces/interfaces"
// import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

    // const { toggleTodo } = useContext( TodoContext )  // Se puede quitar esta linea gracias al custom hooks que se creo

    // const handleDbClick = () => {
    //     toggleTodo( todo.id );
    // }

    const { toggleTodo } = useTodos();

  return (
    <li style={{
      cursor: 'pointer',
      textDecoration: todo.completed ? 'line-through' : ''
    }}
        onDoubleClick={ () =>toggleTodo( todo.id ) }>
        {/* onDoubleClick={ handleDbClick} */}
        { todo.desc }
    </li>
  )
}
