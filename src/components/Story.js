import React from 'react'

const Story = ({ title, content }) => {
  return (
    <div id="story">
      <h1>{title}</h1>
      <p>{content.map(storyWord => storyWord.content).join(" ")}</p>
    </div>
  )
}

export default Story
