import React from 'react';
import './app.css';

import TodosPage from "./router"
import StateHook from "./hooks/state-hook"
import ReducerCounter from "./hooks/use-reducer"
import TodoListObservable from "./hooks/observer"
import Context from "./contexts/store-context"
import Store from "./store"


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Context.Provider value={Store}>
            <TodosPage />
          </Context.Provider>
          <hr />
          <TodoListObservable />
          <hr />
          <StateHook />
          <ReducerCounter />
        </div>
      </header>
    </div>
  )
}
