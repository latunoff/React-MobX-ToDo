import { types } from "mobx-state-tree";
import { useObservable, useLocalStore } from "mobx-react-lite";
import { observable } from "mobx"

const Todo = types
  .model({
    id: types.number,
    name: types.string,
    done: false
  })

const thing = Todo
  .create({
    id: 1,
    name: "First todo",
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
      if (name > '') {
        // console.log('addTodo', name);
        self.items.push({
          id: Date.now(),
          name
        })
      }
    },
    deleteTodo(id) {
      self.items = self.items.filter((e) => e.id !== id);
    }
  }))

// const Store = ()=>useObservable(Todos.create({items: [thing]}))
const Store = Todos.create({items: [thing]})

export default Store