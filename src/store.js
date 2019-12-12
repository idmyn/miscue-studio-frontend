import { createStore } from "redux"

const defaultState = {
  teacher: undefined
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case "SET_TEACHER":
    const teacher = action.payload.teacher
    return { ...state, teacher }
  case "SET_STUDENTS":
    const students = action.payload.students
    return { ...state, students }
  default:
    return state
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)