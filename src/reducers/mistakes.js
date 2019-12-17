const mistakes = (state = [], action) => {
  switch (action.type) {
    case "ADD_MISTAKE":
      return [...state, { ...action.payload.mistake }]
    case "CLEAR_MISTAKES":
      return []
    default:
      return state
  }
}

export default mistakes
