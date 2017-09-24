import { CHANGE_FOL } from '../action/changeFOLConfig';
import { FOL_CONFIG } from '../shapeConstants';

const initialState = {
    [FOL_CONFIG]: {iterations: 2},
};

const changeFOLConfig = (state = initialState, action) => {
    console.log("changeFOLConfig", state);
    console.log("changeFOLConfig", action);
    switch (action.type) {
    case CHANGE_FOL:
        return {[FOL_CONFIG]: action.payload};
    default:
        return state;
    }
};

export default changeFOLConfig;