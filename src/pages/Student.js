import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setStudent } from "../actions"
import API from "../adapters/API"
import ReadingList from "../components/ReadingList"

const Student = ({ studentId, setStudent, student }) => {
  useEffect(() => {
    API.fetchStudent(studentId).then(setStudent)
  }, [])

  return (
    <div>
      student id: {studentId} <br/>
      name: {student?.name}

      {student?.readings && <ReadingList/>}
    </div>
  )
}

const mapStateToProps = state => ({
  student: state.student
})

export default connect(mapStateToProps, { setStudent })(Student)
