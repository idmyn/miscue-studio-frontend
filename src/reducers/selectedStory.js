const selectedStory = (state = null, action) => {
  switch (action.type) {
    case "SET_SELECTED_STORY":
      const selectedStory = action.payload.story
      return { ...selectedStory }
    default:
      return state
  }
}

export default selectedStory
