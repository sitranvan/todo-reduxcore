
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}
export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}
export const priortyFilterChange = (priorty) => {
    return {
        type: 'filters/priortyFilterChange',
        payload: priorty
    }
}
export const toggleCompletedChange = (todoId) => {
    return {
        type: 'todoList/toggleCompletedChange',
        payload: todoId
    }
}