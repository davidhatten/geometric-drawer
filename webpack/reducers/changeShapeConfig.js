import { CHANGE_FOL } from '../actions/changeFOLConfig';
import { CHANGE_CIRCLE_RADIUS } from '../actions/changeCircleConfig';
import { CHANGE_SQUARE } from '../actions/changeSquareConfig';
import { FOL_CONFIG, CIRCLE_CONFIG, SQUARE_CONFIG } from '../shapeConstants';

const initialState = {
    [CIRCLE_CONFIG]: {radius: 300},
    [SQUARE_CONFIG]: {length: 250},
};

const changeShapeConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_SQUARE:
        return updateState(state, SQUARE_CONFIG, action.payload);
    default:
        return state;
    }
};

const updateState = (state, config, payload) => {
    return {...state, [config]: {...state[config], ...payload}};
};

export default changeShapeConfig;
