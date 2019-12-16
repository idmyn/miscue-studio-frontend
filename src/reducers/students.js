const students = (state = [], action) => {
  switch (action.type) {
  case "SET_STUDENTS":
    const students = action.payload.students
    return students
  default:
    return state
  }
}

export default students
