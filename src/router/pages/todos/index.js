import React from 'react';
import PropTypes from 'prop-types';
import { observer, useObserver } from "mobx-react-lite";

import Context from "../../../store"
import Store from "../../../store"

TodosPage.propTypes = {
    todos: PropTypes.array,
    textInput: PropTypes.string
}

function TodosPage()
{
  const [text, setText] = React.useState('test');
  //useObserver(() => 
  return ( 
    <div className="App">
      <Context.Consumer>
      {({ items, addTodo, showTodos }) => (
        <header className="App-header">

            <input name="todoname" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => {
              addTodo(text)
              setText('')
            }}>Add</button>

          <div>
            <p>Todos:</p>
            <div>
                {showTodos && showTodos.map(e => (
                  <p key={e.id}>{e.id}. {e.name}  </p>
                ))}
            </div>
          </div>
        </header>
      )}
      </Context.Consumer>
    </div>
  )
}

export default observer(TodosPage)