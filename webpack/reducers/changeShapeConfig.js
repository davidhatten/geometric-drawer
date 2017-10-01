import { CHANGE_FOL } from '../actions/changeFOLConfig';
import { CHANGE_CIRCLE } from '../actions/changeCircleConfig';
import { CHANGE_SQUARE } from '../actions/changeSquareConfig';
import { FOL_CONFIG, CIRCLE_CONFIG, SQUARE_CONFIG } from '../shapeConstants';

const initialState = {
    [FOL_CONFIG]: {
        iterations: {
            name: `Iterations`,
            min: 2,
            max: 10,
            value: 2,
        }, 
        radius: {
            name: `Radius`,
            min: 1,
            max: 1000,
            value: 300,
        },
    },
    [CIRCLE_CONFIG]: {radius: 300},
    [SQUARE_CONFIG]: {length: 250},
};

const changeShapeConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_CIRCLE:
        console.log(`shapeConfig - CHANGE_CIRCLE`, state);
        console.log(`shapeConfig - CHANGE_CIRCLE`, action);
        return updateState(state, CIRCLE_CONFIG, action.payload);
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
