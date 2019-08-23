import { types } from "mobx-state-tree";

export const TodoItem = types
.model({
    id: types.number,
    name: types.string,
    done: types.boolean
})