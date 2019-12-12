import React, { useEffect } from "react"
import { Route, Redirect } from "react-router-dom"

import paths from "./paths"
import API from "./adapters/API"
import Auth from "./pages/Auth"

import { connect } from "react-redux"

const App = ({ history, teacher, setTeacher }) => {
  useEffect(() => {
    API.validate()
      .then(teacher => {
        setTeacher(teacher)
        history.push("yay")
      })
      .catch(() => {
        logout()
      })
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setTeacher(null)
    history.push(paths.SIGNUP)
  }

  return (
    <div className="App">
      { teacher && <button onClick={logout}>log out</button> }
      <Route path={paths.LOGIN} component={Auth} />
      <Route path={paths.SIGNUP} component={Auth} />
    </div>
  )
}

const mapStateToProps = state => ({
  teacher: state.teacher
})

const mapDispatchToProps = dispatch => ({
  setTeacher: (teacher) => dispatch({ type: "SET_TEACHER", payload: { teacher } })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
