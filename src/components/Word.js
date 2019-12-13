import React from "react"
import { connect } from "react-redux"

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

const mapStateToProps = state => ({
  selectedId: state.selectedWordId
})

const mapDispatchToProps = dispatch => ({
  setSelectedId: (id) => dispatch({ type: "SET_SELECTED_WORD_ID", payload: { id } })
})

export default connect(mapStateToProps, mapDispatchToProps)(Word)
