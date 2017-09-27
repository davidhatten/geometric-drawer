import { CHANGE_FOL } from '../action/changeFOLConfig';
import { CHANGE_CIRCLE } from '../action/changeCircleConfig';
import { FOL_CONFIG, CIRCLE_CONFIG, SQUARE_CONFIG } from '../shapeConstants';

const initialState = {
    [FOL_CONFIG]: {iterations: 2, radius: 300},
    [CIRCLE_CONFIG]: {radius: 300},
    [SQUARE_CONFIG]: {sideLength: 250},
};

const shapeConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_FOL:
        console.log("shapeConfig - CHANGE_FOL", state);
        console.log("shapeConfig - CHANGE_FOL", action);
        return updateState(state, FOL_CONFIG, action.payload);
    case CHANGE_CIRCLE:
        console.log(`shapeConfig - CHANGE_CIRCLE`, state);
        console.log(`shapeConfig - CHANGE_CIRCLE`, action);
        return updateState(state, CIRCLE_CONFIG, action.payload);
    default:
        return state;
    }
};

const updateState = (state, config, payload) => {
    return {...state, [config]: {...state[config], ...payload}};
};

export default shapeConfig;
