const API_ENDPOINT = "https://api.miscue.studio/v1/"
const LOGIN_URL = API_ENDPOINT + "login"
const VALIDATE_URL = API_ENDPOINT + "validate"
const SIGNUP_URL = API_ENDPOINT + "teachers/"
const STUDENTS_URL = API_ENDPOINT + "students/"
const STORIES_URL = API_ENDPOINT + "stories/"
const READINGS_URL = API_ENDPOINT + "readings/"

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
      get(STUDENTS_URL)

const fetchStories = () =>
      get(STORIES_URL)

const fetchStory = (id) =>
      get(STORIES_URL + id)

const submitAnalysis = ({ studentId, storyId, mistakes }) => {
  const body = {
    reading: {
      student_id: studentId,
      story_id: storyId,
      mistakes: mistakes.map(mistake => ({
        storyWordId: mistake.wordId,
        category: mistake.mistake,
        miscue: mistake.miscue
      }))
      }
  }
  console.log('submitting...', body)

  return fetch(READINGS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify(body)
  }).then(jsonify)
}

export default { login, signup, validate, fetchStudents, fetchStories, fetchStory, submitAnalysis }
