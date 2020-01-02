import React from "react"
import { connect } from "react-redux"
import { navigate } from "@reach/router"
import paths from "../paths"
import Story from "../components/Story"
import Instructions from "../components/AnalysisInstructions"
import MistakeList from "../components/MistakeList"
import API from "../adapters/API"
import { setReading } from "../actions"

const Analysis = ({ studentId, story, mistakes, setReading }) => {
  const completeAnalysis = () => {
    API.submitAnalysis({ studentId, storyId: story.id, mistakes })
      .then(setReading)
      .then(navigate(paths.RESULTS))
  }

  return (
    <div id="analysis">
      <Story />
      <Instructions />
      <MistakeList />
      <button onClick={completeAnalysis}>Complete</button>
    </div>
  )
}

const mapStateToProps = state => ({
  studentId: state.selectedStudentId,
  story: state.selectedStory,
  mistakes: state.mistakes
})

export default connect(mapStateToProps, { setReading })(Analysis)
