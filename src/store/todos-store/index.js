import { types, flow } from "mobx-state-tree";

import { TodoItem } from "./todo";


export const TodoList = types
.model({
  items: types.optional(types.array(TodoItem), []),
  loading: types.optional(types.boolean, false),
  loaded: types.optional(types.boolean, false),
  fixedItem: types.maybe(types.reference(types.late(() => TodoItem)))
})
.views(self => ({
    get showTodos() {
      return self.items
    },
    get getFixed() {
      return self.fixedItem
    }
}))
.actions(self => ({
  fetchTodos: flow(function* fetchTodos() {
    self.loading = true
    try {
      const response = yield fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
      const data = yield response.json()
      data.product.ingredients.forEach((e, idx) => {
        self.items.push({
          id: idx+1+'',//Math.floor(Math.random()*10)+'',
          name: e.text,
          done: false
        })
      })
      self.loading = false
      self.loaded = true
    } catch (error) {
      console.error("Failed to fetch", error)
      self.loading = false
    }
  }),
  fixItem(id) {
    self.fixedItem = id
  },
  getFixedItem() {
    return self.fixedItem
  },
  addTodo(name) {
    if (name > '') {
      self.items.push({
        id: self.items.length+1+'',//Date.now()+'',
        name,
        done: false
      })
    }
  },
  getTodo(id) {
    return self.items.find(e => e.id === id);
  },
  toggleTodo(id) {
    const todo = self.items.find(e => e.id === id);
    todo.done = !todo.done;
  },
  deleteTodo(id) {
    self.items = self.items.filter((e) => e.id !== id);
  }
}))

export default TodoList