import React from "react"
import useForm from "react-hook-form"
import API from "../adapters/API"

import { connect } from "react-redux"

const Login = ({ setTeacher }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = credentials => {
    API.login(credentials)
      .then(teacher => {
        console.log(teacher)
        setTeacher(teacher)
        // history.push("/home")
      })
      .catch(err => {
        console.error(err)
        // setErrors(err)
      })
  }

  return (
    <div className="login">
      <h1>Login</h1>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setTeacher: (teacher) => dispatch({ type: "SET_TEACHER", payload: { teacher } })
})

export default connect(null, mapDispatchToProps)(Login)
