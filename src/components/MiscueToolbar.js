import React, { useState } from "react"
import { connect } from "react-redux"
import { addMistake } from "../actions"

const MiscueToolbar = ({ selectedWordId, addMistake }) => {
  const [mistake, setMistake] = useState("")
  const [miscue, setMiscue] = useState("")
  const [errors, setErrors] = useState([])

  const mistakesWithoutInput = ["Hesitation", "Non-response", "Omission"]

  const handleChange = e => {
    if (e.target.name === "miscue") {
      setMiscue(e.target.value)
    } else {
      setMistake(e.target.value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newErrors = []
    if (!mistake) {
      newErrors.push("Please select a mistake")
    } if (!mistakesWithoutInput.includes(mistake) && !miscue) {
      newErrors.push("Please enter the student's miscue")
    } if (!selectedWordId) {
      newErrors.push("Please select a word")
    }

    if (newErrors.length > 0) {
      setErrors(newErrors)
      return newErrors
    }

    if (mistakesWithoutInput.includes(mistake)) {
      console.log(selectedWordId, mistake)
      addMistake(selectedWordId, mistake)
    } else {
      console.log(selectedWordId, mistake, miscue)
      addMistake(selectedWordId, mistake, miscue)
    }
    setMistake("")
    setMiscue("")
    setErrors([])
  }

  return (
    <form id="toolbar" onSubmit={handleSubmit}>
      {errors && (
        <ul>
          {errors.map(error => (
            <li key={error} className="error">
              {error}
            </li>
          ))}
        </ul>
      )}
      <label className="block">
        <input
          name="mistake"
          type="radio"
          value="Correction"
          onChange={handleChange}
          checked={mistake === "Correction"}
        />
        Correction
      </label>
      <label className="block">
        <input
          name="mistake"
          type="radio"
          value="Miscorrection"
          onChange={handleChange}
          checked={mistake === "Miscorrection"}
        />
        Miscorrection
      </label>
      <label className="block">
        <input
          name="mistake"
          type="radio"
          value="Hesitation"
          onChange={handleChange}
          checked={mistake === "Hesitation"}
        />
        Hesitation
      </label>
      <label className="block">
        <input
          name="mistake"
          type="radio"
          value="Insertion"
          onChange={handleChange}
          checked={mistake === "Insertion"}
        />
        Insertion
      </label>
      <label className="block">
        <input
          name="mistake"
          type="radio"
          value="Non-response"
          onChange={handleChange}
          checked={mistake === "Non-response"}
        />
        Non-response
      </label>
      <label className="block">
        <input
          name="mistake"
          type="radio"
          value="Omission"
          onChange={handleChange}
          checked={mistake === "Omission"}
        />
        Omission
      </label>
      <label className="block">
        <input
          name="mistake"
          type="radio"
          value="Repetition"
          onChange={handleChange}
          checked={mistake === "Repetition"}
        />
        Repetition
      </label>
      <label className="block">
        <input
          name="mistake"
          type="radio"
          value="Reversal"
          onChange={handleChange}
          checked={mistake === "Reversal"}
        />
        Reversal
      </label>
      <label className="block">
        <input
          name="mistake"
          type="radio"
          value="Substitution"
          onChange={handleChange}
          checked={mistake === "Substitution"}
        />
        Substitution
      </label>
      <br />

      <label htmlFor="miscue">Miscue:</label>
      <input
        name="miscue"
        type="text"
        disabled={mistakesWithoutInput.includes(mistake)}
        value={miscue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

const mapStateToProps = state => ({
  selectedWordId: state.selectedWordId
})

export default connect(mapStateToProps, { addMistake })(MiscueToolbar)
