import React from "react"
import ReactTooltip from "react-tooltip"

const MistakeTooltip = () => {
  const handleSubmit = (e, wordId) => {
    e.preventDefault()
    console.log(wordId)
  }

  return (
    <ReactTooltip
      id="mistakeForm"
      place="bottom"
      effect="solid"
      globalEventOff="click"
      clickable={true}
      // getContent+dataTip seems to be the only reliable way to ensure I can access the id of the clicked word
      getContent={dataTip => {
        return (
          <form onSubmit={e => handleSubmit(e, dataTip)}>
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
              autoComplete="off"
              placeholder="Enter miscue here"
            />
            <button type="submit">Create</button>
          </form>
        )
      }}
    />
  )
}

export default MistakeTooltip
