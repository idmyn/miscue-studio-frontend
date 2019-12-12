import React, { useEffect } from 'react'
import API from "../adapters/API"

const Home = () => {
  useEffect(() => {
    API.fetchStudents()
  }, [])

  return (
    <div id="home">
      <h1>home</h1>
      <ul>
        <li>list item</li>
      </ul>
    </div>
  )
}

export default Home
