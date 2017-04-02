let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

/**/

export const addAircraft = (aircraft) => ({
  type: 'ADD_AIRCRAFT',
  aircraft
})

export const selectAircraft = (id) => ({
  type: 'SELECT_AIRCRAFT',
  id
})