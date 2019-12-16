import React, { useState } from "react"

const MiscueToolbar = () => {
  const [mistake, setMistake] = useState("")
  const [miscue, setMiscue] = useState("")

  const handleChange = e => {
    if (e.target.name === "miscue") {
      setMiscue(e.target.value)
    } else {
      setMistake(e.target.value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(mistake, miscue)
  }

  return (
    <form id="toolbar" onSubmit={handleSubmit}>
      Correction:
      <input
        name="mistake"
        type="radio"
        value="Correction"
        onChange={handleChange}
        checked={mistake === "Correction"}
      />
      Miscorrection:
      <input
        name="mistake"
        type="radio"
        value="Miscorrection"
        onChange={handleChange}
        checked={mistake === "Miscorrection"}
      />
      Hesitation:
      <input
        name="mistake"
        type="radio"
        value="Hesitation"
        onChange={handleChange}
        checked={mistake === "Hesitation"}
      />
      Insertion:
      <input
        name="mistake"
        type="radio"
        value="Insertion"
        onChange={handleChange}
        checked={mistake === "Insertion"}
      />
      Non-response:
      <input
        name="mistake"
        type="radio"
        value="Non-response"
        onChange={handleChange}
        checked={mistake === "Non-response"}
      />
      Omission:
      <input
        name="mistake"
        type="radio"
        value="Omission"
        onChange={handleChange}
        checked={mistake === "Omission"}
      />
      Repetition:
      <input
        name="mistake"
        type="radio"
        value="Repetition"
        onChange={handleChange}
        checked={mistake === "Repetition"}
      />
      Reversal:
      <input
        name="mistake"
        type="radio"
        value="Reversal"
        onChange={handleChange}
        checked={mistake === "Reversal"}
      />
      Substitution:
      <input
        name="mistake"
        type="radio"
        value="Substitution"
        onChange={handleChange}
        checked={mistake === "Substitution"}
      />
      <br />

      <label for="miscue">Miscue:</label>
      <input
        name="miscue"
        type="text"
        disabled={["Hesitation", "Non-response", "Omission"].includes(mistake)}
        value={miscue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default MiscueToolbar
