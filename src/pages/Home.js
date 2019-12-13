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
    console.log(student, story)
    navigate(`${paths.ANALYSIS}/1/2`)
  }

  return (
    <div id="home">
      <h1>home</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="student">Student:</label>
        <input name="student" type="text" list="studentList" ref={register({ required: true })}/>
        {errors.student && <span>This field is required</span>}
        {/* SET VALUE TO ID?! or just submit it that way I guess? */}
        <br/><label htmlFor="story">Story:</label>
        <input name="story" type="text" list="storyList" ref={register({ required: true })}/>
        {errors.story && <span>This field is required</span>}
        <br/><button type="submit">Submit</button>
      </form>

      <datalist id="studentList">
        {students.map(student => (
          <option key={student.id} value={student.name}>{student.name}</option>
        ))}
      </datalist>
      <datalist id="storyList">
        {stories.map(story => (
          <option key={story.id} value={story.title}>{story.author}</option>
        ))}
      </datalist>
    </div>
  )
}

export default Home
