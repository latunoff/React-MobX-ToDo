import React from 'react';
import './App.css';

import { types, getSnapshot } from "mobx-state-tree";
import { observer } from "mobx-react";
import { observable, computed } from "mobx"

import TodosView from "./components/TodoView"

// @observer
class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { todos: [{ id: 1, name: "Start" }] };
    this.textInput = '';
  }

  handlerAddTodo(e) {
    e.preventDefault();
    if (this.textInput.value === '') return;
    // console.log(this.state.todos.slice(-1)[0].id);
    this.state.todos.push({ id: this.state.todos.slice(-1)[0].id+1, name: this.textInput.value });
    // this.setState(this.state);

    // add by mobx way
    this.things.addTodo(this.textInput.value);
  }

  handlerDelTodo(id) {
    this.things.deleteTodo(id);
  }

  render() {

    const Todo = types
      .model({
        id: types.number,
        name: types.string,
        done: false
      })

    const thing = Todo
      .create({
        id: 1,
        name: "mobxStart",
      });

    const Todos = types
      .model({
        items: types.array(Todo)
      })
      .views(self => ({
        get showTodos() {
          return self.items;
        }
      }))
      .actions(self => ({
        addTodo(name) {
          self.items.push({
            id: self.items.length > 0 ? self.items.slice(-1)[0].id+1 : 1,
            name
          })
        },
        deleteTodo(id) {
          self.items = self.items.filter((e) => e.id !== id);
        }
      }))
    const things = this.things = Todos
      .create({
        items: [thing]
      });


    const todos = this.state.todos;

    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handlerAddTodo.bind(this)}>
            <input name="todoname" ref={(input) => this.textInput = input} />
            <button>Add</button>
          </form>
          <div>
          <p>Mobx:</p>
          <TodosView list={things} />
          <hr />
          {/* <p>State:</p>{todos.map(e => (<p key={e.id}>{e.id}. {e.name}</p>))} */}
          </div>
        </header>
      </div>
    );
  }
}


export default App;
