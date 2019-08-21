import React from 'react';
import PropTypes from 'prop-types';
import { types, getSnapshot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import Context from "../../store"

TodosPage.propTypes = {
    todos: PropTypes.array,
    textInput: PropTypes.string
}

function TodosPage()
{
  let textInput = '';
  return (
    <div className="App">
      <Context.Consumer>
      {({ items, onAddClick }) => (
        <header className="App-header">
          
            <input name="todoname" ref={(input) => textInput = input} />
            <button onClick={onAddClick}>Add</button>
          
          <div>
            <p>Todos:</p>
            <div>
                {items && items.map(e => (
                    <p key={e.id}>{e.id}. {e.name}  </p>
                ))}
            </div>
          </div>
        </header>
      )}
      </Context.Consumer>
    </div>
  );
}

export default TodosPage