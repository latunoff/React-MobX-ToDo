import { types } from "mobx-state-tree";

export const TodoItem = types
.model({
    id: types.identifier,
    name: types.string,
    done: types.boolean
})