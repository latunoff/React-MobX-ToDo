import React, { useCallback, useContext } from 'react';
import { observer } from "mobx-react-lite";

import Context from "../../../contexts/store-context"
import Todo from "./todo"
import StyledHeader from "./styles"


function TodosPage()
{
  const todoRef = React.useRef()

  const store = useContext(Context)
  if (!store.loaded) store.fetchTodos().then(() => {
    // console.log('fixed', store.fixedItem);
  })

  const onAddClick = useCallback(() => {
    store.addTodo(todoRef.current.value)
    todoRef.current.value = ''
  }, [store])
  
  return ( 
    <div className="app">
      <StyledHeader>
        <header className="app-header">
          <input name="todoname" ref={todoRef} />
          <button onClick={onAddClick}>Add</button>
          <div>
            <p>Todos:</p>
            <p>Fixed todo: {store && store.items.length > 0 && store.fixedItem.id > '' &&
              <span className={store.items[store.fixedItem.id-1].done ? 'done' : ''}>{store.items[store.fixedItem.id-1].id}. {store.items[store.fixedItem.id-1].name}</span>}
            </p>
            {store.loading && <div>Loading...</div>}
            <ul>
              {store && store.items.filter(e => e.id !== store.fixedItem.id).map(e => (
                <Todo todo={e} key={e.id} />
              ))}
            </ul>
          </div>
        </header>
      </StyledHeader>
    </div>
  )
}

export default observer(TodosPage)