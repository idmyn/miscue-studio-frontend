const selectedStudentId = (state = "", action) => {
  switch (action.type) {
    case "SET_SELECTED_STUDENT_ID":
      return action.payload.studentId
    default:
      return state
  }
}

export default selectedStudentId
