import React, { useEffect } from 'react'
import API from "../adapters/API"
import { connect } from "react-redux"

const Home = ({ students, stories }) => {
  useEffect(() => {
    API.fetchStudents()
    API.fetchStories()
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

const mapStateToProps = (state) => ({
  students: state.students,
  stories: state.stories
})

export default connect(mapStateToProps, null)(Home)
