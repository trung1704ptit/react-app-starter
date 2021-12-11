import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR
} from './constants';

const initialState = {
    profile: {}
};

const system = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                loading: true,
                error: null,
                profile: {}
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.payload,
                error: null
            }
        case SIGN_IN_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                profile: {}
            }
        default:
            return state;
    }
};

export default system;
