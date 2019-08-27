import React, { useCallback, useContext } from 'react'
import { observer } from "mobx-react-lite";

import Context from "../../../../contexts/store-context"
import StyledTodo from "./styles"


function Todo({todo}) {
  const store = useContext(Context)
  
  const onTodoToggle = useCallback((id) => {
    store.toggleTodo(id)
  }, [store])

  const onTodoDelete = useCallback((id) => {
    store.deleteTodo(id)
  }, [store])

  const onFixClick = useCallback((id) => {
    store.fixItem(id)
  }, [store])

  return (
    <StyledTodo>
      <li key={todo.id} className={todo.done ? 'done' : ''}>{todo.id}. {todo.name} 
        <input type="checkbox" checked={todo.done} onChange={() => onTodoToggle(todo.id)} />
        <button className="button red" onClick={() => onTodoDelete(todo.id)}>X</button>
        <button className="button" onClick={() => onFixClick(todo.id)}>V</button>
      </li>
    </StyledTodo>
  )
}

export default observer(Todo)