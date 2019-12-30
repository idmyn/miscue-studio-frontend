import React, { useState } from "react"
import ReactTooltip from "react-tooltip"
import { connect } from "react-redux"
import { addMistake } from "../actions"

const MistakeTooltip = ({ addMistake }) => {
  const mistakesWithoutInput = ["Hesitation", "Non-response", "Omission", null]
  const [mistake, setMistake] = useState(null)
  const [miscue, setMiscue] = useState("")

  const handleChange = e => {
    if (e.target.name === "miscue") {
      setMiscue(e.target.value)
    } else {
      setMistake(e.target.value)
    }
  }

  const handleSubmit = (e, wordId) => {
    e.preventDefault()

    if (!mistake) {
      return
    }

    if (mistakesWithoutInput.includes(mistake)) {
      console.log(typeof wordId, mistake)
      addMistake(wordId, mistake)
    } else if (miscue !== "") {
      console.log(wordId, mistake, miscue)
      addMistake(wordId, mistake, miscue)
    }

    // setting mistake to null and miscue to "" seems to be the best way of resetting tooltips on submit
    // only works when user inputs miscue and uses submit button though
    setMistake(null)
    setMiscue("")
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
          <form onSubmit={e => handleSubmit(e, Number(dataTip))}>
            <label className="block">
              <input
                name="mistake"
                type="radio"
                value="Correction"
                checked={mistake === "Correction"}
                onChange={handleChange}
              />
              Correction
            </label>
            <label className="block">
              <input
                name="mistake"
                type="radio"
                value="Miscorrection"
                checked={mistake === "Miscorrection"}
                onChange={handleChange}
              />
              Miscorrection
            </label>
            <label className="block">
              <input
                name="mistake"
                type="radio"
                value="Hesitation"
                checked={mistake === "Hesitation"}
                onChange={handleChange}
              />
              Hesitation
            </label>
            <label className="block">
              <input
                name="mistake"
                type="radio"
                value="Insertion"
                checked={mistake === "Insertion"}
                onChange={handleChange}
              />
              Insertion
            </label>
            <label className="block">
              <input
                name="mistake"
                type="radio"
                value="Non-response"
                checked={mistake === "Non-response"}
                onChange={handleChange}
              />
              Non-response
            </label>
            <label className="block">
              <input
                name="mistake"
                type="radio"
                value="Omission"
                checked={mistake === "Omission"}
                onChange={handleChange}
              />
              Omission
            </label>
            <label className="block">
              <input
                name="mistake"
                type="radio"
                value="Repetition"
                checked={mistake === "Repetition"}
                onChange={handleChange}
              />
              Repetition
            </label>
            <label className="block">
              <input
                name="mistake"
                type="radio"
                value="Reversal"
                checked={mistake === "Reversal"}
                onChange={handleChange}
              />
              Reversal
            </label>
            <label className="block">
              <input
                name="mistake"
                type="radio"
                value="Substitution"
                checked={mistake === "Substitution"}
                onChange={handleChange}
              />
              Substitution
            </label>

            <input
              name="miscue"
              type="text"
              autoComplete="off"
              placeholder="Enter miscue here"
              value={miscue}
              onChange={handleChange}
              disabled={mistakesWithoutInput.includes(mistake)}
            />
            <button type="submit">Create</button>
          </form>
        )
      }}
    />
  )
}

export default connect(
  null,
  { addMistake }
)(MistakeTooltip)
