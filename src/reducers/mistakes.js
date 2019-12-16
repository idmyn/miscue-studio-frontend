const mistakes = (state = [], action) => {
  switch (action.type) {
    case "ADD_MISTAKE":
      return [...state, { ...action.payload }]
    default:
      return state
  }
}

export default mistakes
