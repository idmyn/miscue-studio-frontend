import React from "react"
import { connect } from "react-redux"
import Story from "../components/Story"

const Analysis = ({ studentId }) => {
  return (
    <>
      <Story />
    </>
  )
}

const mapStateToProps = state => ({
  studentId: state.studentId
})

export default connect(mapStateToProps, null)(Analysis)
