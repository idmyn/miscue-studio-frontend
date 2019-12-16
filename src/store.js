import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'

const defaultState = {
  teacher: undefined,
  students: [],
  selectedStudentId: undefined,
  selectedStoryId: undefined,
  selectedWordId: undefined,
  stories: [],
  selectedStory: {}
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case "SET_TEACHER":
    const teacher = action.payload.teacher
    return { ...state, teacher }
  case "SET_STUDENTS":
    const students = action.payload.students
    return { ...state, students }
  case "SET_STORIES":
    const stories = action.payload.stories
    return { ...state, stories }
  case "SET_SELECTED_STUDENT":
    const selectedStudent = action.payload.student
    return { ...state, selectedStudent }
  case "SET_SELECTED_STORY_ID":
    const selectedStoryId = action.payload.storyId
    return { ...state, selectedStoryId }
  case "SET_SELECTED_STORY":
    const selectedStory = action.payload.story
    return { ...state, selectedStory }
  case "SET_SELECTED_WORD_ID":
    const selectedWordId = action.payload.id
    return { ...state, selectedWordId }
  case "SELECT_NEXT_WORD":
    const nextWordId = state.selectedWordId
      ? state.selectedWordId + 1
      : state.selectedStory.content[0].id
    return { ...state, selectedWordId: nextWordId }
  case "SELECT_PREVIOUS_WORD":
    const previousWordId = state.selectedWordId
      ? state.selectedWordId - 1
      : state.selectedStory.content[0].id
    return { ...state, selectedWordId: previousWordId }
  default:
    return state
  }
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore(
  reducer,
  composedEnhancers
)
