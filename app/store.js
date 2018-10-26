import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk


//Actions
export const SET_CAMPUSES = 'SET_CAMPUSES'
export const ADD_CAMPUS = 'ADD_CAMPUS'
export const DELETE_CAMPUS = 'DELETE_CAMPUS'

export const SET_STUDENTS = 'SET_STUDENTS'
export const ADD_STUDENT = 'ADD_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'


//Action Creators

const setCampuses = campuses => ({
  type: SET_CAMPUSES,
  campuses
})

const addCampus = campus => ({
  type: ADD_CAMPUS,
  campus
})

const deleteCampus = id => ({
  type: DELETE_CAMPUS,
  id
})

const setStudents = (students) => ({
  type: SET_STUDENTS,
  students
})

const addStudent = student => ({
  type: ADD_STUDENT,
  student
})

const deleteStudent = id => ({
  type: DELETE_STUDENT,
  id
})

//thunks 
//for fetching the students and campuses from db
export const fetchCampuses = () => {
  return async function(dispatch){
    try {
      const {data} = await axios.get('api/campuses')
      return dispatch(setCampuses(data))
    } catch (err){
      console.error(err)
    }  
  }
}

export const postCampus = (campus) => {
  return async function(dispatch){
    try {
      const {data} = await axios.post('api/campuses', campus)
      return dispatch(addCampus(data))
    } catch (err){
      console.error(err)
    }
  }
}

export const removeCampus = (id) => {
  return async function(dispatch){
    try {
      await axios.delete(`api/campuses/${id}`)
      return dispatch(deleteCampus(id))
    } catch (err){
      console.error(err)
    }
  }
}

export const fetchStudents = () => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get('api/students')
      return dispatch(setStudents(data))
    } catch (err){
      console.error(err)
    }
  }
}

export const postStudent = (student) => {
  return async function(dispatch){
    try {
      const {data} = await axios.post('api/students', student)
      return dispatch(addStudent(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const removeStudent = (id) => {
  return async function(dispatch){
    try {
      await axios.delete(`api/students/${id}`)
      return dispatch(deleteStudent(id))
    } catch (err){
      console.error(err)
    }
  }
}

export default createStore(
  rootReducer,
  applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  )
)
