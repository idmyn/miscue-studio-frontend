import { applyMiddleware, compose, combineReducers } from "redux"
import thunk from 'redux-thunk'
import teacher from './teacher'
import selectedStudentId from './selectedStudentId'
import selectedWordId from './selectedWordId'
import selectedStory from './selectedStory'
import mistakes from './mistakes'
import reading from './reading'

export const rootReducer = combineReducers({
  teacher, selectedStudentId, selectedWordId, selectedStory, mistakes, reading
})

export const composedEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
