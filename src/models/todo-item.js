import { types, getSnapshot } from "mobx-state-tree";

const item = {
    id: 1,
    name: "Name"
}

export const TodoItem = types.model({
    id: types.number,
    name: types.string
})