// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search)
//     })
//     return todoRemaining
// }
import { createSelector } from "reselect"
export const todoListSelector = state => state.todoList
export const searchTextSelector = state => state.filters.search
export const filterStatusSelector = state => state.filters.status
export const filtersPriorirySelector = state => state.filters.prioriry
//reselect giúp viết ngắn gọn hơn
//todoList => todoListSelector, searchText => searchTextSelector
export const todoRemainingSelector = createSelector(
    todoListSelector, filterStatusSelector,
    searchTextSelector, filtersPriorirySelector,
    (todoList, status, searchText, prioriry) => {
        return todoList.filter(todo => {
            if (status === 'All') {
                return prioriry.length ? todo.name.includes(searchText)
                    && prioriry.includes(todo.prioriry) : todo.name.includes(searchText)
            }
            //  todo.completed=true, ! todo.completed=false
            return todo.name.includes(searchText)
                && (status === 'Completed' ? todo.completed : !todo.completed)
                && (prioriry.length ? prioriry.includes(todo.prioriry) : true)
        })
    })

