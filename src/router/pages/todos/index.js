import React, { useCallback, useContext } from 'react';
import { observer } from "mobx-react-lite";

import Context from "../../../contexts/store-context"
import Todo from "./todo"
import Header, { Input, Button, Caption } from "./styles"


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
      <Header>
        <Input name="todoname" ref={todoRef} />
        <Button onClick={onAddClick}>Add</Button>
        <div>
          <p>Todos:</p>
          <p>Fixed todo: {store.isValidRef() &&
            <Caption done={store.fixedItem.done}>
              {store.fixedItem.id}. {store.fixedItem.name}
            </Caption>}
          </p>
          {store.loading && <div>Loading...</div>}
          <ul>
            {store.items.filter(e => (!store.isValidRef() || e.id !== store.fixedItem.id)).map(e => (
              <Todo todo={e} key={e.id} />
            ))}
          </ul>
        </div>
      </Header>
  )
}

export default observer(TodosPage)