import { types } from "mobx-state-tree";

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
        console.log('addTodo', name);
      self.items.push({
        id: 5,//Date.now(),
        name
      })
    },
    deleteTodo(id) {
      self.items = self.items.filter((e) => e.id !== id);
    }
  }))
let things = Todos
  .create({
    items: [thing],
    // onAddClick: addTodoClick
});

function addTodoClick(todo) {
    console.log('ok');
    // things.addTodo(todo)
}

export default things