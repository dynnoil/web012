import { combineReducers } from 'redux';
import * as ActionTypes from '../constants';

const gridRecords = {
    filter: '',
    records: [
        { firstName: "John", lastName: "Doe", active: false, id: 1 },
        { firstName: "Mary", lastName: "Moe", active: false, id: 2 },
        { firstName: "Peter", lastName: "Noname", active: true, id: 3 }
    ],
    loading: false
};

const detailsRecords = [
    {
        id: 1,
        name: "John Doe",
        about: "Nice guy",
        hobby: "Likes drinking wine",
        skills: ["html", "javascript", "redux"]
    },
    {
        id: 2,
        name: "Mary Moe",
        about: "Cute girl",
        hobby: "Likes playing xbox whole days long",
        skills: ["Fortran", "Lua", "R#"]
    }
];

export function grid(state = gridRecords, action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_ACTIVE:
            const records = state.records.slice();
            const record = records[action.index];
            records[action.index] = Object.assign({}, record, { active: !record.active });
            return Object.assign({}, state, {
                records: records
            });
        case ActionTypes.SET_FILTER:
            return Object.assign({}, state, {
                filter: action.filter
            });
        case ActionTypes.START_LOADING:
            return Object.assign({}, state, { loading: true });
        case ActionTypes.STOP_LOADING:
            return Object.assign({}, state, { loading: false });
        case ActionTypes.ADD_DATA:
            return Object.assign({}, state, {
                records: [...action.value]
            });
        default:
            return state;
    }
}

export function details(state = detailsRecords, action) {
    switch (action.type) {
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    details,
    grid
});