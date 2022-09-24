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
export const filtersPriortySelector = state => state.filters.priorty
//reselect giúp viết ngắn gọn hơn
//todoList => todoListSelector, searchText => searchTextSelector
export const todoRemainingSelector = createSelector(
    todoListSelector, filterStatusSelector,
    searchTextSelector, filtersPriortySelector,
    (todoList, status, searchText, priorty) => {
        return todoList.filter(todo => {
            if (status === 'All') {
                return priorty.length ? todo.name.includes(searchText)
                    && priorty.includes(todo.priorty) : todo.name.includes(searchText)
            }
            //  todo.completed=true, ! todo.completed=false
            return todo.name.includes(searchText)
                && (status === 'Completed' ? todo.completed : !todo.completed)
                && (priorty.length ? priorty.includes(todo.priorty) : true)
        })
    })

