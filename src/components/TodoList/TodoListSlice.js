
const initState = [
    { id: 1, name: 'Learn Javascript', completed: false, priorty: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priorty: 'High' },
    { id: 3, name: 'Learn NodeJs', completed: false, priorty: 'Low' }
]



const todoListReducer = (state = initState, action) => {

    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        case 'todoList/toggleCompletedChange':
            return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        default:
            return state
    }
}
export default todoListReducer

