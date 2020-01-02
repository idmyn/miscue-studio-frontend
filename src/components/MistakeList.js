import React from "react"
import { connect } from "react-redux"

const MistakeList = ({ story, mistakes }) => {
  return (
    <div id="mistake-list">
      <h2>Mistakes</h2>
      <ul>
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
    </div>
  )
}

const mapStateToProps = state => ({
  story: state.selectedStory,
  mistakes: state.mistakes
})

export default connect(mapStateToProps, null)(MistakeList)
