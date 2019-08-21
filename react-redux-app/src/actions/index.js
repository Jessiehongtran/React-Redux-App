import axios from 'axios';


export const FETCHING_HOUSE_DATA_LOADING = 'FETCHING_HOUSE_DATA_LOADING';
export const FETCHING_HOUSE_DATA_SUCCESS = 'FETCHING_HOUSE_DATA_SUCCESS';
export const FETCHING_HOUSE_DATA_FAILURE = 'FETCHING_HOUSE_DATA_FAILURE'


export const getData = () => {

    return dispatch => {
        dispatch({type: FETCHING_HOUSE_DATA_LOADING});
        axios
            .get(`https://anapioficeandfire.com/api/houses`)
            .then(res => 
                dispatch({type: FETCHING_HOUSE_DATA_SUCCESS, payload: res.data})
            )
            .catch(err => 
                dispatch({type: FETCHING_HOUSE_DATA_FAILURE, payload: err.response}))

       
    }
}

