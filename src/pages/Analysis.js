import React from "react"
import { connect } from "react-redux"
import Story from "../components/Story"
import MiscueToolbar from "../components/MiscueToolbar"
import API from "../adapters/API"

const Analysis = ({ studentId, story, mistakes }) => {
  const completeAnalysis = () => {
    API.submitAnalysis({ studentId, storyId: story.id, mistakes }).then(console.log)
  }

  return (
    <>
      <Story />
      <MiscueToolbar />
      <button onClick={completeAnalysis}>Complete</button>
      {mistakes.length > 0 && <ul>
        {mistakes.map(mistake => (
          <li>
            {story.content.find(word => word.id === mistake.wordId).parent_word}
            <ul>
              <li>Mistake: {mistake.mistake}</li>
              {mistake.miscue && <li>Miscue: {mistake.miscue}</li>}
            </ul>
          </li>
        ))}
      </ul>
      }
    </>
  )
}

const mapStateToProps = state => ({
  studentId: state.selectedStudentId,
  story: state.selectedStory,
  mistakes: state.mistakes
})

export default connect(mapStateToProps, null)(Analysis)
