import { CHANGE_FOL } from '../action/changeFOLConfig';
import { FOL_CONFIG } from '../shapeConstants';

const initialState = {
    [FOL_CONFIG]: {iterations: 2, radius: 300},
    LOL: {lol: "lol"},
};

const shapeConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_FOL:
        console.log("changeFOLConfig", state);
        console.log("changeFOLConfig", action.payload.iterations);
        return { ...state, [FOL_CONFIG]: {...state[FOL_CONFIG], iterations: action.payload.iterations} };
    default:
        return state;
    }
};

export default shapeConfig;