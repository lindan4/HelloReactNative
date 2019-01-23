import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS } from './types';
import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';
import { ToastAndroid } from 'react-native';

export const employeeUpdate = ({ props, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { props, value }
    };

};

export const employeeCreate = ({ name, phone, shift }) => {
    // return {
    //     type: EMPLOYEE_CREATE,
    //     payload: { name, phone, shift }
    // };
    
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`).push({ name, phone, shift }).then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
            Actions.pop();
        });
    };

};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();


    return dispatch => {

        firebase.database().ref(`/users/${currentUser.uid}/employees`).on('value', snapshot => {
            // ToastAndroid.show(JSON.stringify(snapshot), ToastAndroid.LONG);
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
        });

    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).set({ name, phone, shift }).then(() => {
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
            Actions.pop();
        });

    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).remove().then( Actions.pop());
    }
    
    

};