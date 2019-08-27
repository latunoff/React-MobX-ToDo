import React, { useCallback, useContext } from 'react'
import { observer } from "mobx-react-lite";

import Context from "../../../../contexts/store-context"
import StyledTodo, { Button, Input } from "./styles"


function Todo({todo}) {
  const store = useContext(Context)

  const { id } = todo
  
  const onTodoToggle = useCallback((id) => {
    store.toggleTodo(id)
  }, [store])

  const onTodoDelete = useCallback((id) => {
    store.deleteTodo(id)
  }, [store])

  const onFixClick = useCallback((id) => {
    store.fixItem(id)
  }, [store])

  const onDelete = () => onTodoDelete(todo.id)
  const onFix = () => onFixClick(todo.id)
  const onToggle = () => onTodoToggle(todo.id)

  return (
      <StyledTodo key={todo.id} done={todo.done}>
        {todo.id}. {todo.name}
        <Input type="checkbox" checked={todo.done} onChange={onToggle} />
        <Button delete onClick={onDelete}>X</Button>
        <Button  onClick={onFix}>V</Button>
      </StyledTodo>
  )
}

export default observer(Todo)