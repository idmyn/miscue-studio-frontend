import React, { useEffect } from "react"
import { Route, Redirect } from "react-router-dom"

import paths from "./paths"
import API from "./adapters/API"
import Login from "./pages/Login"

function App({ history }) {
  useEffect(() => {
    API.validate()
      .then(() => {
        history.push("yay")
      })
      .catch(() => {
        history.push(paths.LOGIN)
      })
  }, [])

  return (
    <div className="App">
      <Route path={paths.LOGIN} component={Login} />
    </div>
  )
}

export default App
