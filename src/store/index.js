import TodoList from "../store/todos-store/index"


export const Store = TodoList.create({
    items: [],
    fixedItem: "1"
})

export default Store
