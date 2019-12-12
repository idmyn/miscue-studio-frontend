import React, { useEffect } from "react"
import { Route } from "react-router-dom"

import paths from "./paths"
import API from "./adapters/API"
import Auth from "./pages/Auth"
import Home from "./pages/Home"

import { connect } from "react-redux"

const App = ({ history, teacher, setTeacher }) => {
  const logout = () => {
    localStorage.removeItem("token")
    setTeacher(null)
    history.push(paths.LOGIN)
  }

  useEffect(() => {
    API.validate()
      .then(teacher => {
        setTeacher(teacher)
        history.push(paths.HOME)
      })
      .catch(() => {
        logout()
      })
  }, [])

  return (
    <div className="App">
      { teacher &&
        <>
          <button onClick={logout}>log out</button>
          <span id="email">{teacher.email}</span>
        </>
      }
      <Route path={paths.SIGNUP} component={Auth} />
      <Route path={paths.LOGIN} component={Auth} />
      <Route path={paths.HOME} component={Home} />
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
