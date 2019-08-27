import { types, flow, isValidReference } from "mobx-state-tree";

import TodoItem from "./todo";


const TodoList = types
.model({
  items: types.optional(types.array(TodoItem), []),
  loading: false,
  loaded: false,
  fixedItem: types.maybe(types.reference(types.late(() => TodoItem)))
})
.views(self => ({
    get showTodos() {
      return self.items
    }
}))
.actions(self => ({
  fetchTodos: flow(function* fetchTodos() {
    self.loading = true
    try {
      const response = yield fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
      const data = yield response.json()
      self.items = data.product.ingredients.map((e, idx) => {
        return {
          id: idx+1+'',
          name: e.text,
          done: false
        }
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
    self.loading = true; self.loading = false   // без этого переключения ф-я isValidRef() в шаблоне не возвращает true после выставления fixedItem
  },
  isValidRef() {
    return isValidReference(() => self.fixedItem)
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