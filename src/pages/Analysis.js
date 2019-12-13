import React, { useEffect, useState } from "react"
import API from "../adapters/API"
import Story from "../components/Story"

const Analysis = ({ storyId, studentId }) => {
  const [story, setStory] = useState({ title: "", content: [] })

  useEffect(() => {
    API.fetchStory(storyId).then(res => {
      setStory(res)
    })
  }, [])

  return (
    <>
      <Story {...story} />
    </>
  )
}

export default Analysis
