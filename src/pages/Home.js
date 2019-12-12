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
      <ul id="students">
        {students.map(student => (
          <li>{student.name}</li>
        ))}
      </ul>
      <ul id="stories">
        {stories.map(story => (
          <li>{story.title} by {story.author}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  students: state.students,
  stories: state.stories
})

export default connect(mapStateToProps, null)(Home)
