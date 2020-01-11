import React, { useEffect } from "react"
import API from "../adapters/API"

const Student = ({ studentId }) => {

  useEffect(() => {
    API.fetchStudent(studentId).then(console.log)
  }, [])

  return (
    <div>
      student id: {studentId}
    </div>
  )
}

export default Student
