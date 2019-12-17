import React from "react"
import { connect } from "react-redux"
import { navigate } from "@reach/router"
import paths from "../paths"
import {
  clearSelectedWord,
  clearMistakes,
  clearReading
} from "../actions"

const Results = ({
  reading,
  story,
  clearSelectedWord,
  clearMistakes,
  clearReading
}) => {
  const wordCount = story?.content.length
  const skipCount =
    reading &&
      reading.mistakes.reduce((skipCount, mistake) => (
        ["Non-response", "Omission"].includes(mistake.category) && skipCount + 1
      ), 0)
  const attempedWordCount = reading && wordCount - skipCount

  const resetAnalysis = () => {
    clearSelectedWord()
    clearMistakes()
    clearReading()
  }

  const goHome = () => {
    resetAnalysis()
    navigate(paths.HOME)
  }

  return (
    <div id="results">
      <h1>Analysis Complete</h1>
      {reading && (
        <ul>
          <li>
            {reading.student.name} attemped {attempedWordCount}/
            {story.content.length} words
          </li>
          <li>
            {reading.student.name} made mistakes on{" "}
            {reading.mistakes.length - skipCount}/{attempedWordCount} attempted
            words
          </li>
          <li>
            {reading.student.name} read {story.title}{" "}
            {Math.round(
              100 - (reading.mistakes.length / story.content.length) * 100
            )}
            % successfully
          </li>
        </ul>
      )}
      <button onClick={goHome}>Home</button>
    </div>
  )
}

const mapStateToProps = state => ({
  reading: state.reading,
  story: state.selectedStory
})

export default connect(
  mapStateToProps,
  {
    clearSelectedWord,
    clearMistakes,
    clearReading
  }
)(Results)
