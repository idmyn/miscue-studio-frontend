import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import API from "../adapters/API"
import paths from "../paths"
import useForm from "react-hook-form"
import { navigate } from "@reach/router"
import { setSelectedStudentId, setSelectedStory } from "../actions"

const Home = ({
  setSelectedStudentId,
  selectedStudentId,
  selectedStoryId,
  selectedStory,
  setSelectedStory
}) => {
  const [students, setStudents] = useState([])
  const [stories, setStories] = useState([])

  useEffect(() => {
    API.fetchStudents().then(setStudents)
    API.fetchStories().then(setStories)
  }, [])

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = ({ student, story }) => {
    navigate(paths.ANALYSIS)
  }

  const handleChange = e => {
    if (e.target.name === "story") {
      setSelectedStory(e.target.value)
    } else {
      setSelectedStudentId(e.target.value)
    }
  }

  return (
    <div id="home">
      <h1>home</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="student">Student:</label>
        <select
          name="student"
          onChange={handleChange}
          value={selectedStudentId}
          ref={register({ required: true })}
        >
          <option value="" disabled>Select a student</option>
          {students.map(student => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
        {errors.student && <span>This field is required</span>}
        <br />
        <label htmlFor="story">Story:</label>
        <select
          name="story"
          onChange={handleChange}
          value={selectedStory?.id}
          defaultValue=""
          ref={register({ required: true })}
        >
          <option value="" disabled>Select a story</option>
          {stories.map(story => (
            <option key={story.id} value={story.id}>
              {story.title} by {story.author}
            </option>
          ))}
        </select>
        {errors.story && <span>This field is required</span>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  selectedStory: state.selectedStory,
  selectedStudentId: state.selectedStudentId
})

export default connect(
  mapStateToProps,
  {  setSelectedStudentId, setSelectedStory }
)(Home)
