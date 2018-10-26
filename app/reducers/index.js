import {combineReducers} from 'redux'
import CampusReducer from './CampusReducer'
import StudentsReducer from './StudentsReducer'

export default combineReducers({
  campuses: CampusReducer,
  students: StudentsReducer
})