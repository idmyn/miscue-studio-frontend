import React from "react"
import { connect } from "react-redux"
import { setSelectedId } from "../actions"
import MistakeTooltip from "./MistakeTooltip"

const Word = ({ id, content, selectedId, setSelectedId, mistakeWordIds }) => {
  const handleClick = () => {
    id === selectedId ? setSelectedId(null) : setSelectedId(id)
  }

  const classes = []
  id === selectedId && classes.push("clicked")
  mistakeWordIds.includes(id) && classes.push("mistaken")

  return (
    <>
      <span
        className={classes.join(" ")}
        data-tip={id}
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
  selectedId: state.selectedWordId,
  mistakeWordIds: state.mistakes.map(mistake => mistake.wordId)
})

export default connect(
  mapStateToProps,
  { setSelectedId }
)(Word)
