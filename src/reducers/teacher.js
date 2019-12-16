const teacher = (state = null, action) => {
  switch (action.type) {
    case "SET_TEACHER":
      const teacher = action.payload.teacher
      return { ...teacher }
    default:
      return state
  }
}

export default teacher
