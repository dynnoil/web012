import * as ActionTypes from '../constants';

export const setFilter = (value) => ({
    type: ActionTypes.SET_FILTER,
    filter: value
});

export const toggleActive = (index) => ({
    type: AtionTypes.TOGGLE_ACTIVE,
    index: index
});

export function startLoading() {
    return {
        type: ActionTypes.START_LOADING
    }
}

export function stopLoading() {
    return {
        type: ActionTypes.STOP_LOADING
    }
}

export function addData(value) {
    return {
        type: ActionTypes.ADD_DATA,
        value
    }
}

export function loadDataInGrid() {
    return (dispatch) => {
        dispatch(startLoading());
        fetch('http://localhost:4730')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(addData(json.gridRecords))
            })
            .then(function () {
                dispatch(stopLoading());
            });
    }
}