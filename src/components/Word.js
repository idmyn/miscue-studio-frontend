import React from "react"
import { connect } from "react-redux"
import { setSelectedId } from "../actions"
import ReactTooltip from "react-tooltip"

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

      <ReactTooltip
        id="mistakeForm"
        place="bottom"
        effect="solid"
        globalEventOff="click"
        clickable={true}
      >
        <form>
          <label className="block">
            <input
              name="mistake"
              type="radio"
              value="Correction"
            />
            Correction
          </label>
          <label className="block">
            <input
              name="mistake"
              type="radio"
              value="Miscorrection"
            />
            Miscorrection
          </label>
          <label className="block">
            <input
              name="mistake"
              type="radio"
              value="Hesitation"
            />
            Hesitation
          </label>
          <label className="block">
            <input
              name="mistake"
              type="radio"
              value="Insertion"
            />
            Insertion
          </label>
          <label className="block">
            <input
              name="mistake"
              type="radio"
              value="Non-response"
            />
            Non-response
          </label>
          <label className="block">
            <input
              name="mistake"
              type="radio"
              value="Omission"
            />
            Omission
          </label>
          <label className="block">
            <input
              name="mistake"
              type="radio"
              value="Repetition"
            />
            Repetition
          </label>
          <label className="block">
            <input
              name="mistake"
              type="radio"
              value="Reversal"
            />
            Reversal
          </label>
          <label className="block">
            <input
              name="mistake"
              type="radio"
              value="Substitution"
            />
            Substitution
          </label>

          <label className="block">
            Miscue:
            <input
              name="miscue"
              type="text"
              autocomplete="off"
            />
          </label>
          <button type="submit">Create</button>
        </form>
      </ReactTooltip>
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
