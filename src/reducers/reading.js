const reading = (state = null, action) => {
  switch (action.type) {
    case "SET_READING":
      const reading = action.payload.reading
      return { ...reading }
    default:
      return state
  }
}

export default reading
