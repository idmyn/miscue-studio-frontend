import React from "react"
import { connect } from "react-redux"
import { setSelectedId } from "../actions"

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
    // rendering a space to split up the words
  )
}

const mapStateToProps = state => ({
  selectedId: state.selectedWordId
})

export default connect(mapStateToProps, { setSelectedId })(Word)
