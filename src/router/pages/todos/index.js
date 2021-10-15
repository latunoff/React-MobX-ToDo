import React, { useCallback, useContext } from 'react';
import { observer } from "mobx-react-lite";

import Context from "../../../contexts/store-context"
import Todo from "./todo"
import Header, { Caption } from "./styles"
import { GreenButton } from '../../../styled/button';
import { SInput } from '../../../styled/input';

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
        <SInput name="todoname" ref={todoRef} placeholder="New Todo name" />
        <GreenButton onClick={onAddClick}>Add</GreenButton>
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