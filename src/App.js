import React, { useState } from 'react';
import './app.css';

import { observer } from "mobx-react";

import TodosPage from "./pages/todos"
import StateHook from "./hooks/state-hook"
import ReducerCounter from "./hooks/use-reducer"
import Context from "./store"
import Store from "./store/todos"
// let store = {items: [{id: 3, name: 'test'}],onAddClick: addClickTodoo}


console.log(Store)

export default function App() {
  const [statement, setStatement] = useState(Store);
  const addClickTodo = () => {
    Store.addTodo('this', this);
    // store.items.push({id: 4, name: '444'});
    setStatement(Store);
    // setStatement(Object.assign({}, Store));

    // количество items при клике увеличивается, но не на экране
    console.log(Store.items);
  }
  statement.onAddClick = addClickTodo;

  // по идее при setTimeout должен добавлять todo2 в список, но нет...
  setTimeout(()=>{ 
    Store.addTodo('todo2')
    // setStatement(Object.assign({}, Store));  // в этом случае добавление происходит, но криво
    setStatement(Store);
    console.log(Store.items);
  }, 1000)


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Context.Provider value={statement}>
            <TodosPage />
          </Context.Provider>
          <hr />
          <StateHook />
          <ReducerCounter />
        </div>
      </header>
    </div>
  );
}

function addClickTodoo(e, todo) {
  console.log(e, todo, this);
  e.preventDefault();

  Store.addTodo('this');

  console.log(Store.items);
}

function onDelClick(id) {
  // this.things.deleteTodo(id);
}
