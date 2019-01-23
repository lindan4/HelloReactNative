import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';
import { ToastAndroid } from 'react-native';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            // ToastAndroid.show(action.payload, ToastAndroid.LONG);
            return action.payload;
        default:
            return state;
    }
};