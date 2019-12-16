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
