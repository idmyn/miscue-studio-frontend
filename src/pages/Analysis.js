import React from "react"
import { connect } from "react-redux"
import Story from "../components/Story"
import MiscueToolbar from "../components/MiscueToolbar"

const Analysis = ({ studentId }) => {
  return (
    <>
      <Story />
      <MiscueToolbar />
    </>
  )
}

const mapStateToProps = state => ({
  studentId: state.studentId
})

export default connect(mapStateToProps, null)(Analysis)
