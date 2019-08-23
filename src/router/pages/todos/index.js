import React, { useCallback, useContext } from 'react';
import { observer } from "mobx-react-lite";

import Context from "../../../contexts/store-context"


function TodosPage()
{
  const todoRef = React.useRef()

  const store = useContext(Context)

  const onAddClick = useCallback(() => {
    store.addTodo(todoRef.current.value)
    todoRef.current.value = ''
  }, [store])

  const onTodoToggle = useCallback((id) => {
    store.toggleTodo(id)
  }, [store])

  const onTodoDelete = useCallback((id) => {
    store.deleteTodo(id)
  }, [store])

  return ( 
    <div className="App">
        <header className="App-header">
            <input name="todoname" ref={todoRef} />
            <button onClick={onAddClick}>Add</button>
          <div>
            <p>Todos:</p>
            <div>
                {store && store.items.map(e => (
                  <p key={e.id} className={e.done ? 'done' : ''}>{e.id}. {e.name} 
                    <input type="checkbox" checked={e.done} onChange={() => onTodoToggle(e.id)} />
                    <button className="button red" onClick={() => onTodoDelete(e.id)}>X</button>
                  </p>
                ))}
            </div>
          </div>
        </header>
    </div>
  )
}

export default observer(TodosPage)