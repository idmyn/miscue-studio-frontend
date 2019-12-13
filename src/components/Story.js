import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import Word from "./Word"

const Story = ({ title, content }) => {
  // const [selectedId, setSelectedId] = useState(null)
  // console.log(content)
  const selectFirstWord = () => {
    console.log(content)
    // setSelectedId(content[0].id)
  }

  const handleKeydown = (e) => {
    if (e.key === "ArrowRight") {
      console.log("right!")
      selectFirstWord()
    }
    if (e.key === "ArrowLeft") {
      console.log("left!")
      selectFirstWord()
    }
  }

  useEffect(() => {
    console.log(content)
    document.addEventListener("keydown", handleKeydown)
    return () => document.removeEventListener("keydown", handleKeydown)
  }, [])

  return (
    <div id="story">
      <h1>{title}</h1>
      <p>
        {content.map(storyWord => (
          <Word
            key={storyWord.id}
            {...storyWord}
          />
        ))}
      </p>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.selectedStory
})

export default connect(mapStateToProps, null)(Story)
