import React from "react"
import { connect } from "react-redux"
import Story from "../components/Story"

const Analysis = ({ story, studentId }) => {
  return (
    <>
      <Story {...story} />
    </>
  )
}

const mapStateToProps = state => ({
  story: state.selectedStory,
  studentId: state.studentId
})

export default connect(mapStateToProps, null)(Analysis)
