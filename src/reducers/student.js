const student = (state = null, action) => {
  switch (action.type) {
    case "SET_STUDENT":
      const student = action.payload.student
      return { ...student }
    default:
      return state
  }
}
 export default student
