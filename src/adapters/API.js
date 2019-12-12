import store from '../store'

const API_ENDPOINT = "http://localhost:3000/api/v1/"
const LOGIN_URL = API_ENDPOINT + "login"
const VALIDATE_URL = API_ENDPOINT + "validate"
const SIGNUP_URL = API_ENDPOINT + "teachers"
const STUDENTS_URL = API_ENDPOINT + "students"
const STORIES_URL = API_ENDPOINT + "stories"

const jsonify = res => {
  if (!res.ok) throw res
  return res.json().then(data => {
    if (data.errors) throw data.errors
    else return data
  })
}

const login = credentials =>
  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ teacher: credentials })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token)
      return data.teacher
    })

const signup = credentials =>
  fetch(SIGNUP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ teacher: credentials })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token)
      return data.teacher
    })

const validate = () =>
  fetch(VALIDATE_URL, {
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token)
      return data.teacher
    })

const get = (url) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    }
  }).then(jsonify)

const fetchStudents = () =>
  get(STUDENTS_URL).then(students => {
    console.log(students)
    store.dispatch({ type: 'SET_STUDENTS', payload: { students } })
  })

const fetchStories = () =>
  get(STORIES_URL).then(stories => {
    console.log(stories)
    store.dispatch({ type: 'SET_STORIES', payload: { stories } })
  })

export default { login, signup, validate, fetchStudents, fetchStories }
