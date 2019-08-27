import { types } from "mobx-state-tree";


const TodoItem = types
.model({
    id: types.identifier,
    name: types.string,
    done: types.boolean
})

export default TodoItem