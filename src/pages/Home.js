import React, { useEffect, useState } from 'react'
import API from "../adapters/API"

const Home = () => {
  const [students, setStudents] = useState([])
  const [stories, setStories] = useState([])

  useEffect(() => {
    API.fetchStudents().then(setStudents)
    API.fetchStories().then(setStories)
  }, [])

  return (
    <div id="home">
      <h1>home</h1>
      <label for="student">Student:</label>
      <input name="student" type="text" list="studentList"/>
      <datalist id="studentList">
        {students.map(student => (
          <option value={student.name}>{student.name}</option>
        ))}
      </datalist>
      {/* SET VALUE TO ID?! or just submit it that way I guess? */}
      <br/><label for="story">Story:</label>
      <input name="story" type="text" list="storyList"/>
      <datalist id="storyList">
        {stories.map(story => (
          <option value={story.title}>{story.author}</option>
        ))}
      </datalist>
    </div>
  )
}

export default Home
