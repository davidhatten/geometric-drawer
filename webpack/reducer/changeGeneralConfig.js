import { CHANGE_GENERAL_CONFIG } from '../action/changeGeneralConfig';

const initialState = {
    lineWidth: 10,
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