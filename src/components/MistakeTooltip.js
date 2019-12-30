import React from "react"
import ReactTooltip from "react-tooltip"

const MistakeTooltip = () => {
  const _afterShow = (e) => {
    console.log(e.target.dataset.id)
    // this only console logs when there is no tooltip visible and user clicks, not every time you click around
    // trigger manually? https://github.com/wwayne/react-tooltip#reacttooltipshowtarget
  }

  return (
    <ReactTooltip
      id="mistakeForm"
      place="bottom"
      effect="solid"
      globalEventOff="click"
      clickable={true}
      afterShow={_afterShow}
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

        <input
          name="miscue"
          type="text"
          autocomplete="off"
          placeholder="Enter miscue here"
        />
        <button type="submit">Create</button>
      </form>
    </ReactTooltip>
  )
}

export default MistakeTooltip
