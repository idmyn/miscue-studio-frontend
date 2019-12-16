const mistakes = (state = [], action) => {
  switch (action.type) {
    case "ADD_MISTAKE":
      return [...state, { ...action.payload.mistake }]
    default:
      return state
  }
}

export default mistakes
