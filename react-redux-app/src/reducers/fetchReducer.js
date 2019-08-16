import {FETCHING_HOUSE_DATA} from '../actions/index'


const initialState = {
    isLoading: false,
    houses: [],
    error: ''
}




export const fetchReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCHING_HOUSE_DATA:
            return {
                ...state,
                isLoading: true,
                error: ''
            }

        default:
            return state
    }
}