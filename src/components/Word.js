import React from "react"
import { connect } from "react-redux"
import { setSelectedId } from "../actions"
import MistakeTooltip from "./MistakeTooltip"

const Word = ({ id, content, selectedId, setSelectedId }) => {
  const handleClick = () => {
    id === selectedId ? setSelectedId(null) : setSelectedId(id)
  }

  const classes = []
  id === selectedId && classes.push("clicked")

  return (
    <>
      <span
        className={classes.join(" ")}
        data-tip
        data-for="mistakeForm"
        data-event="click focus"
        onClick={handleClick}
      >
        {content}
      </span>
      {" " /* rendering a space to split up the words */}

      <MistakeTooltip />
    </>
  )
}

const mapStateToProps = state => ({
  selectedId: state.selectedWordId
})

export default connect(
  mapStateToProps,
  { setSelectedId }
)(Word)
