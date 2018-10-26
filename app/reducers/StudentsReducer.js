import {ADD_STUDENT, SET_STUDENTS, DELETE_STUDENT} from '../store'


const initialState = {
  people: []
}


//student reducer
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return {...state,
      people: action.students
    }
    
    case ADD_STUDENT:

        return {
          ...state,
          people: [...state.people, action.student]
        }
    case DELETE_STUDENT:
        return {
          ...state,
          people: state.people.filter(student => student.id !== action.id)
        }

    default:
      return state
  }
}

export default studentReducer
