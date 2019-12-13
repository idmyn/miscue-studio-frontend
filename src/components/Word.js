import React, { useState } from "react"

const Word = ({ content }) => {
  const [classes, setClasses] = useState([])

  const handleClick = () => {
    classes.includes("clicked") ? setClasses([]) : setClasses(["clicked"])
  }

  return (
    <span class="word" className={classes.join(" ")} onClick={handleClick}>
      {content}{" "}
    </span>
  )
}

export default Word
