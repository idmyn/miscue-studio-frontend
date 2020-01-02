import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import API from "../adapters/API"
import paths from "../paths"
import useForm from "react-hook-form"
import { navigate } from "@reach/router"
import { setSelectedStudentId, setSelectedStory, clearMistakes } from "../actions"

const Home = ({
  setSelectedStudentId,
  selectedStudentId,
  selectedStoryId,
  selectedStory,
  setSelectedStory,
  clearMistakes
}) => {
  const [students, setStudents] = useState([])
  const [stories, setStories] = useState([])
  const [showStudentForm, setShowStudentForm] = useState(true)
  const [newStudentName, setNewStudentName] = useState("")
  const [newStudentErrors, setNewStudentErrors] = useState(null)

  useEffect(() => {
    clearMistakes()
    API.fetchStudents().then(setStudents)
    API.fetchStories().then(setStories)
  }, [])

  useEffect(() => {
    students.length > 0 && setShowStudentForm(false)
  }, [students])

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async ({ student, story, newStudentName }) => {
    if (showStudentForm) {
      API.createStudent(newStudentName)
        .then(student => {
          setSelectedStudentId(student.id)
          navigate(paths.ANALYSIS)
        })
        .catch(err => {
          console.log(err)
          setNewStudentErrors(err)
        })
    } else {
      navigate(paths.ANALYSIS)
    }
  }

  const handleChange = e => {
    if (e.target.name === "story") {
      setSelectedStory(e.target.value)
    } else if (e.target.name === "newStudentName") {
      setNewStudentName(e.target.value)
    } else {
      setSelectedStudentId(e.target.value)
    }
  }

  const toggleStudentForm = e => {
    e.preventDefault()
    setSelectedStudentId("")
    setShowStudentForm(prevState => !prevState)
  }

  return (
    <div id="home">
      <h1>Begin Analysis</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="student">Student:</label>
        <div id="student-select">
          <select
            name="student"
            className={showStudentForm ? "hidden" : undefined}
            onChange={handleChange}
            value={selectedStudentId}
            ref={register({ required: !showStudentForm })}
          >
            <option value="" disabled>
              Select a student
            </option>
            {students.map(student => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>

          <input
            name="newStudentName"
            type="text"
            autoComplete="off"
            placeholder="Enter new student's name"
            className={showStudentForm ? undefined : "hidden"}
            value={newStudentName}
            onChange={handleChange}
            ref={register({ required: showStudentForm })}
          />
          <button onClick={toggleStudentForm}>
            {showStudentForm ? "Select existing student" : "Register new student"}
          </button>

          {(errors.student || errors.newStudentName) && <span>This field is required</span>}
          {newStudentErrors && <span>{newStudentErrors.join(". ")}</span>}
        </div>

        <label htmlFor="story">Story:</label>
        <select
          name="story"
          onChange={handleChange}
          value={selectedStory?.id}
          defaultValue=""
          ref={register({ required: true })}
        >
          <option value="" disabled>
            Select a story
          </option>
          {stories.map(story => (
            <option key={story.id} value={story.id}>
              {story.title} by {story.author}
            </option>
          ))}
        </select>
        {errors.story && <span>This field is required</span>}
        <button type="submit">Begin</button>
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
  { setSelectedStudentId, setSelectedStory, clearMistakes }
)(Home)
