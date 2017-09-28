import { CHANGE_GENERAL_CONFIG } from '../actions/changeGeneralConfig';

const initialState = {
    strokeWidth: 10,
    lockHorizontal: false,
};

const changeGeneralConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_GENERAL_CONFIG:
        return {...state, ...action.payload};
    default:
        return state;
    }
};

export default changeGeneralConfig;