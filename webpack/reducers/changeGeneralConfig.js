import { CHANGE_GENERAL_CONFIG } from '../actions/changeGeneralConfig';

const initialState = {
    strokeWidth: 10,
    lockHorizontal: false,
    lockVertical: true,
    canvasHeight: 3300,
    canvasWidth: 2550,
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