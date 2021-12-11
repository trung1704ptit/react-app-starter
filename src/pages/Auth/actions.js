import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from '../../reducers/constants'

export const actionSignIn = () => dispatch => {
    dispatch({ type: SIGN_IN })
}

export const actionSignInSuccess = payload => dispatch => {
    dispatch({ type: SIGN_IN_SUCCESS, payload })
}


export const actionSignInError = error => dispatch => {
    dispatch({ type: SIGN_IN_ERROR, error })
}

export const actionFetchUserProfile = () => dispatch => {
    dispatch({ type: FETCH_USER })
}

export const actionFetchUserProfileSuccess = payload => dispatch => {
    dispatch({ type: FETCH_USER_SUCCESS, payload })
}


export const actionFetchUserProfileError = error => dispatch => {
    dispatch({ type: FETCH_USER_ERROR, error })
}