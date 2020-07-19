import { LOCATION } from './actions';

const initialState = {
    latitude: '',
    longitude: '',
}

export default function locationReducer(state = initialState, action){
    switch(action.type){
        case LOCATION:
            return {...state, latitude: action.data.latitude, longitude: action.data.longitude}
        default:
            return state
    }
}