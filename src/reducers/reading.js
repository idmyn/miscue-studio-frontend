const reading = (state = null, action) => {
  switch (action.type) {
    case "SET_READING":
      const reading = action.payload.reading
      return { ...reading }
    case "CLEAR_READING":
      return null
    default:
      return state
  }
}

export default reading
