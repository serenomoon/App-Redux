import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodosApp = () => {
    
    const [todoId, setTodosId] = useState(1)

    const { data: todo , isLoading } = useGetTodoQuery(todoId);

    const prevTodo = () => {
        if(todoId === 0 ) return;
        setTodosId(todoId - 1)
    }

    const nextTodo = () => {
        setTodosId(todoId + 1)
    }

  return (
    <>
        <h1> TODOS - RTK Query</h1>
        <hr/>

        <span> isLoading: { isLoading ? 'True' : 'False' } </span>

        <pre>{ JSON.stringify( todo ) }</pre>

        <button onClick={ prevTodo }>
            Prev Todo
        </button>

        <button onClick={ nextTodo }>
            Next Todo
        </button>

        {/* <ul>
            { todos.map( todo => {
                return(
                <li key={ todo.id }>
                    <strong> { todo.completed ? 'DONE' : 'Pending' } </strong>
                    { todo.title }
                </li>
                )
            } )}
        </ul> */}
    </>
  )
}
