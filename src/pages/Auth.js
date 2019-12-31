import React, { useState, useEffect } from "react"
import { Link, navigate } from "@reach/router"
import useForm from "react-hook-form"
import API from "../adapters/API"
import paths from "../paths"

import { setTeacher } from "../actions"
import { connect } from "react-redux"

const Auth = ({ setTeacher }) => {
  const signingUp = window.location.href.includes("signup")
  const { register, handleSubmit, errors, reset } = useForm()
  const [respErrors, setRespErrors] = useState([])
  const onSubmit = credentials => {
    if (signingUp) {
      API.signup(credentials)
        .then(teacher => {
          setTeacher(teacher)
          navigate(paths.HOME)
        })
        .catch(errs => {
          setRespErrors(errs)
        })
    } else {
      API.login(credentials)
        .then(teacher => {
          setTeacher(teacher)
          navigate(paths.HOME)
        })
        .catch(errs => {
          setRespErrors(errs)
          reset()
        })
    }
  }

  // clear form errors if user switches from login to signup or vice versa
  useEffect(() => {
    setRespErrors([])
  }, [window.location.href])

  return (
    <div id={signingUp ? "signup" : "login"}>
      <h1>{signingUp ? "Sign up" : "Log in"}</h1>
      { respErrors.length > 0 && <span id="respErrors">{respErrors}</span> }
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email address:</label>
        <input name="email" type="email" autocomplete={signingUp ? "off" : "on"} ref={register({ required: true })} />
        {errors.email && <span>This field is required</span>}
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}
        {signingUp && (
          <>
            <label htmlFor="password_confirmation">Password confirmation:</label>
            <input
              name="password_confirmation"
              type="password"
              ref={register({ required: true })}
            />
            {errors.password_confirmation && <span>This field is required</span>}
          </>
        )}
        <button type="submit">Submit</button>
      </form>
      {signingUp ? <Link to={"/login"}>log in</Link> : <Link to={"/signup"}>sign up</Link>}
    </div>
  )
}

export default connect(null, { setTeacher })(Auth)
