import {FETCHING_HOUSE_DATA_LOADING, FETCHING_HOUSE_DATA_SUCCESS} from '../actions/index'


const initialState = {
    isLoading: false,
    houses: [],
    error: ''
}




export const fetchReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCHING_HOUSE_DATA_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }

        case FETCHING_HOUSE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                houses: action.payload,
                error: ''
            }

        default:
            return state
    }
}
