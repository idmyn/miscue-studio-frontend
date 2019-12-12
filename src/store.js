import { createStore } from "redux"

const defaultState = {
  teacher: undefined
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case "SET_TEACHER":
    const teacher = action.payload.teacher
    return { ...state, teacher }
  default:
    return state
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
