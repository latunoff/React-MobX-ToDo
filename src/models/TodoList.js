import { types, getSnapshot } from "mobx-state-tree";

import { TodoItem } from "./TodoItem";

export const TodoList = types.model({
    items: types.optional(types.array(TodoItem), [])
})
