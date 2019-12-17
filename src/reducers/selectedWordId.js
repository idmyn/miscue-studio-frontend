const selectedWordId = (state = null, action) => {
  switch (action.type) {
    case "SET_SELECTED_WORD_ID":
      const selectedWordId = action.payload.id
      return selectedWordId
    case "SELECT_NEXT_WORD":
      const nextWordId = state.selectedWordId
        ? state.selectedWordId + 1
        : state.selectedStory.content[0].id
      return nextWordId
    case "SELECT_PREVIOUS_WORD":
      const previousWordId = state.selectedWordId
        ? state.selectedWordId - 1
        : state.selectedStory.content[0].id
      return previousWordId
    case "CLEAR_SELECTED_WORD":
      return null
    default:
      return state
  }
}

export default selectedWordId
