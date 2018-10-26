import {SET_CAMPUSES, ADD_CAMPUS, DELETE_CAMPUS} from '../store'


const initialState = {
  locations: []
}

const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAMPUSES:
    return {...state,
      locations: action.campuses}

    case ADD_CAMPUS:
      return {
        ...state,
        locations: [...state.locations, action.campus]
      }

    case DELETE_CAMPUS:
      return {
        ...state,
        locations: state.locations.filter(campus => campus.id !== action.id)
      }

    default:
      return state
  }
}

export default campusReducer
