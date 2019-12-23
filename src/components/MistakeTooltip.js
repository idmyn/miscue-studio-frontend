import React from "react"
import ReactTooltip from "react-tooltip"

const MistakeTooltip = () => {
  return (
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
  )
}

export default MistakeTooltip
