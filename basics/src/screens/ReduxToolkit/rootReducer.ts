import { combineReducers } from '@reduxjs/toolkit'
import todosReducer from './TodoList/features/todos/todosSlice'
import visibilityFilterReducer from './TodoList/features/filters/filtersSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
