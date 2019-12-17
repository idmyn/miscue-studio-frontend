import React, { useEffect } from "react"
import { Router, navigate } from "@reach/router"

import paths from "./paths"
import API from "./adapters/API"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import Analysis from "./pages/Analysis"
import Results from "./pages/Results"

import { setTeacher } from "./actions"
import { connect } from "react-redux"

const App = ({ teacher, setTeacher }) => {
  const logout = () => {
    localStorage.removeItem("token")
    setTeacher(null)
    navigate(paths.LOGIN)
  }

  useEffect(() => {
    API.validate()
      .then(teacher => {
        setTeacher(teacher)
        navigate(paths.HOME)
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
      <Router>
        <Home path={paths.HOME} />
        <Analysis path={`${paths.ANALYSIS}`} />
        <Results path={`${paths.RESULTS}`} />
        <Auth default />
        {/* make home default? */}
      </Router>
    </div>
  )
}

const mapStateToProps = state => ({
  teacher: state.teacher
})

export default connect(mapStateToProps, { setTeacher })(App)
