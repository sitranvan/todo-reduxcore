import { combineReducers } from "redux"
import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodoListSlice"

// const rootReducer = (state = {}, action) => {
//     // action là 1 object với {
//     //     type:"todoList/addTodo"
//     //     payload: { id: 4, name: 'Learn PHP', completed: false, priorty: 'Low' }
//     // }
//     // split reducer
//     console.log({ state, action })
//     return {
//         filters: filtersReducer(state.filters, action), // tương ứng với key filters
//         todoList: todoListReducer(state.todoList, action) // tương ứng với key todoList
//     }

// }

// dùng combineReducers code ngắn gọn hơn nó trả về 1 function giống như chúng ta viết tường minh
const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})
export default rootReducer

