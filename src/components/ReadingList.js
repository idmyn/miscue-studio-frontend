import React from "react"
import { connect } from "react-redux"

const ReadingList = ({ student }) => {
  return (
    <dl>
      {student?.readings.map(reading => (
        <div key={reading.id}>
          <dt>{reading.date}</dt>
          <dd>{reading.story.title} by {reading.story.author}</dd>
        </div>
      ))}
    </dl>
  )
}

const mapStateToProps = state => ({
  student: state.student
})

export default connect(mapStateToProps, null)(ReadingList)
