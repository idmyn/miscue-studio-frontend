import React, { useEffect, useState } from 'react'
import API from "../adapters/API"
import paths from "../paths"
import useForm from "react-hook-form"
import {navigate} from "@reach/router"

const Home = () => {
  const [students, setStudents] = useState([])
  const [stories, setStories] = useState([])

  useEffect(() => {
    API.fetchStudents().then(setStudents)
    API.fetchStories().then(setStories)
  }, [])

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = ({ student, story }) => {
    navigate(paths.ANALYSIS + "/" + story + "/" + student)
  }

  return (
    <div id="home">
      <h1>home</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="student">Student:</label>
        <select name="student" ref={register({ required: true })} >
          {students.map(student => (
            <option key={student.id} value={student.id}>{student.name}</option>
          ))}
        </select>
        {errors.student && <span>This field is required</span>}
        <br/><label htmlFor="story">Story:</label>
        <select name="story" ref={register({ required: true })} >
          {stories.map(story => (
            <option key={story.id} value={story.id}>{story.title} by {story.author}</option>
          ))}
        </select>
        {errors.story && <span>This field is required</span>}
        <br/><button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Home
