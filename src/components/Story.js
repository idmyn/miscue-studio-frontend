import React, { useState } from "react"
import Word from "./Word"

const Story = ({ title, content }) => {
  const [selectedId, setSelectedId] = useState(null)

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
