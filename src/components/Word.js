import React from "react"

const Word = ({ id, content, selectedId, setSelectedId }) => {

  const handleClick = () => {
    setSelectedId(id)
  }

  const classes = []
  id === selectedId && classes.push("clicked")

  return (
    <span class="word" className={classes.join(" ")} onClick={handleClick}>
      {content}{" "}
    </span>
  )
}

export default Word
