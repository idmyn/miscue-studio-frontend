import React from "react"

const Word = ({ id, content, selectedId, setSelectedId }) => {

  const handleClick = () => {
    setSelectedId(id)
  }

  const classes = []
  id === selectedId && classes.push("clicked")

  return (
    <><span className={classes.join(" ")} onClick={handleClick}>
       {content}
      </span> </>
    // render a space to split up the words
  )
}

export default Word
