import React, { useState } from "react"
import { Link } from "react-router-dom"
import useForm from "react-hook-form"
import API from "../adapters/API"

import { connect } from "react-redux"

const Auth = ({ setTeacher, history }) => {
  const signingUp = window.location.href.includes("signup")
  const { register, handleSubmit, errors, reset } = useForm()
  const [respErrors, setRespErrors] = useState([])
  const onSubmit = credentials => {
    if (signingUp) {
      API.signup(credentials)
        .then(teacher => {
          setTeacher(teacher)
          history.push("/home")
        })
        .catch(errs => {
          setRespErrors(errs)
        })
    } else {
      API.login(credentials)
        .then(teacher => {
          setTeacher(teacher)
          history.push("/home")
        })
        .catch(errs => {
          setRespErrors(errs)
          reset()
        })
    }
  }

  return (
    <div id={signingUp ? "signup" : "login"}>
      <h1>{signingUp ? "Sign up" : "Log in"}</h1>
      { respErrors.length > 0 && <span id="respErrors">{respErrors}</span> }
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email address:</label>
        <input name="email" type="email" ref={register({ required: true })} />
        {errors.email && <span>This field is required</span>}
        <br />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <br />
        {signingUp && (
          <>
            <label htmlFor="password_confirmation">Password confirmation:</label>
            <input
              name="password_confirmation"
              type="password"
              ref={register({ required: true })}
            />
            {errors.password_confirmation && <span>This field is required</span>}
            <br />
          </>
        )}
        <button type="submit">Submit</button>
      </form>
      {signingUp ? <Link to={"/login"}>log in</Link> : <Link to={"/signup"}>sign up</Link>}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setTeacher: (teacher) => dispatch({ type: "SET_TEACHER", payload: { teacher } })
})

export default connect(null, mapDispatchToProps)(Auth)
