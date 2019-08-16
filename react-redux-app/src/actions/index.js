
export const FETCHING_HOUSE_DATA = 'FETCHING_HOUSE_DATA';


export const getData = () => {

    return dispatch => {
        dispatch({type: FETCHING_HOUSE_DATA});
        
    }
}