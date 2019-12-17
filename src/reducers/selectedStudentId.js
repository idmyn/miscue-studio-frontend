const selectedStudentId = (state = "", action) => {
  switch (action.type) {
    case "SET_SELECTED_STUDENT_ID":
      return action.payload.studentId
    case "CLEAR_SELECTED_STUDENT":
      return null
    default:
      return state
  }
}

export default selectedStudentId
