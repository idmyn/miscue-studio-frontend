import React from 'react'
import Word from './Word'

const Story = ({ title, content }) => {
  return (
    <div id="story">
      <h1>{title}</h1>
      <p>{content.map(storyWord => <Word {...storyWord} />)}</p>
    </div>
  )
}

export default Story
