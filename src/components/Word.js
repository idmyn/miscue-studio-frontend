import React, { useState } from "react"

const Word = ({ id, content, selectedId, setSelectedId }) => {
  // const [classes, setClasses] = useState([])

  const handleClick = () => {
    setSelectedId(id)
    // classes.includes("clicked") ? setClasses([]) : setClasses(["clicked"])
  }

  const classes = []
  console.log(id, selectedId)
  id === selectedId && classes.push("clicked")

  return (
    <span class="word" className={classes.join(" ")} onClick={handleClick}>
      {content}{" "}
    </span>
  )
}

export default Word
