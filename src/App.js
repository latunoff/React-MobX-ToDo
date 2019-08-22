import React, { useState } from 'react';
import './app.css';

import TodosPage from "./router"
import StateHook from "./hooks/state-hook"
import ReducerCounter from "./hooks/use-reducer"
import Context from "./store"
import Store from "./store/todos"


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Context.Provider value={Store}>
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
