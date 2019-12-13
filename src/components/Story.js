import React, { useState, useEffect } from "react"
import Word from "./Word"

const Story = ({ title, content }) => {
  const [selectedId, setSelectedId] = useState(null)

  const handleKeydown = (e) => {
    console.log(e)
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
          <Word
            key={storyWord.id}
            {...storyWord}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </p>
    </div>
  )
}

export default Story
