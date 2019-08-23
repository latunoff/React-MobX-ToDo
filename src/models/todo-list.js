import { types } from "mobx-state-tree";

import { TodoItem } from "./todo-item";


export const TodoList = types
.model({
  items: types.optional(types.array(TodoItem), [])
})
.views(self => ({
    get showTodos() {
      return self.items;
    }
}))
.actions(self => ({
  addTodo(name) {
    if (name > '') {
      self.items.push({
        id: Date.now(),
        name,
        done: false
      })
    }
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