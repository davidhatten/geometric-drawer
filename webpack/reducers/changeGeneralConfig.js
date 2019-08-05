import { CHANGE_GENERAL_CONFIG } from '../actions/changeGeneralConfig';

const initialState = {
    strokeWidth: 10,
    lockHorizontal: true,
    lockVertical: true,
    fillShape: false,
    // canvasHeight: 3300,
    // canvasWidth: 2550,
    canvasHeight: 2400,
    canvasWidth: 2400,
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