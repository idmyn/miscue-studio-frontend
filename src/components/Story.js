import React, { useEffect } from "react"
import { connect } from "react-redux"
import Word from "./Word"

const Story = ({ title, content, selectNextWord, selectPreviousWord }) => {
  const handleKeydown = e => {
    if (e.key === "ArrowRight") {
      console.log("right!")
      selectNextWord()
    }
    if (e.key === "ArrowLeft") {
      console.log("left!")
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
        {content.map(storyWord => (
          <Word key={storyWord.id} {...storyWord} />
        ))}
      </p>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.selectedStory
})

const mapDispatchToProps = dispatch => ({
  selectNextWord: () => dispatch({ type: "SELECT_NEXT_WORD" }),
  selectPreviousWord: () => dispatch({ type: "SELECT_PREVIOUS_WORD" })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story)
