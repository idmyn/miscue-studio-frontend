import React from "react"
import { connect } from "react-redux"
import Story from "../components/Story"
import MiscueToolbar from "../components/MiscueToolbar"

const Analysis = ({ studentId, story, mistakes }) => {
  return (
    <>
      <Story />
      <MiscueToolbar />
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
  studentId: state.studentId,
  story: state.selectedStory,
  mistakes: state.mistakes
})

export default connect(mapStateToProps, null)(Analysis)
