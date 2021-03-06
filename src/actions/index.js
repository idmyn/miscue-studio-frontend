import API from "../adapters/API"

export const selectNextWord = () => (dispatch, getState) => {
  const { selectedWordId, selectedStory } = getState()
  const finalWordId = selectedStory.content[selectedStory.content.length - 1].id
  const nextWordId = selectedWordId
    ? selectedWordId + 1
    : selectedStory.content[0].id
  nextWordId <= finalWordId && dispatch({ type: "SET_SELECTED_WORD_ID", payload: { id: nextWordId } })
}

export const selectPreviousWord = () => (dispatch, getState) => {
  const { selectedWordId, selectedStory } = getState()
  const firstWordId = selectedStory.content[0].id
  const previousWordId = selectedWordId
    ? selectedWordId - 1
    : firstWordId
  previousWordId >= firstWordId && dispatch({ type: "SET_SELECTED_WORD_ID", payload: { id: previousWordId } })
}

export const setSelectedStory = id => dispatch => {
  API.fetchStory(id).then(story =>
    dispatch({ type: "SET_SELECTED_STORY", payload: { story } })
  )
}

export const setSelectedStudentId = studentId => ({
  type: "SET_SELECTED_STUDENT_ID",
  payload: { studentId }
})

export const setTeacher = teacher => ({
  type: "SET_TEACHER",
  payload: { teacher }
})

export const setSelectedId = id => ({
  type: "SET_SELECTED_WORD_ID",
  payload: { id }
})

export const addMistake = (wordId, mistake, miscue = null) => ({
  type: "ADD_MISTAKE",
  payload: { mistake: { wordId, mistake, miscue } }
})

export const setReading = reading => ({
  type: "SET_READING",
  payload: { reading }
})

export const clearSelectedStudent = () => ({
  type: "CLEAR_SELECTED_STUDENT"
})

export const clearSelectedStory = () => ({
  type: "CLEAR_SELECTED_STORY"
})

export const clearSelectedWord = () => ({
  type: "CLEAR_SELECTED_WORD"
})

export const clearMistakes = () => ({
  type: "CLEAR_MISTAKES"
})

export const clearReading = () => ({
  type: "CLEAR_READING"
})
