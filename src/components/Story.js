import React, { useEffect } from "react"
import { connect } from "react-redux"
import Word from "./Word"
import { selectNextWord, selectPreviousWord } from "../actions"

import paths from "../paths"
import { navigate } from "@reach/router"

const Story = ({
  title,
  content,
  selectNextWord,
  selectPreviousWord,
  selectedWordId
}) => {
  content || navigate(paths.HOME)

  const handleKeydown = e => {
    if (e.key === "ArrowRight") {
      selectNextWord()
    }
    if (e.key === "ArrowLeft") {
      selectPreviousWord()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown)
    return () => document.removeEventListener("keydown", handleKeydown)
  }, [])

  return (
    <div id="story">
      <h1>{title}</h1>
      <p>
        {content?.map(storyWord => <Word key={storyWord.id} {...storyWord} />)}
      </p>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.selectedStory,
  selectedWordId: state.selectedWordId
})

export default connect(
  mapStateToProps,
  { selectNextWord, selectPreviousWord }
)(Story)
