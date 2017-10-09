import { CHANGE_FOL_CONFIG } from '../actions/changeFOLConfig';
import { updateShapeConfigValue } from "../stateUtil";
import { standardRadius } from "../shapeConstants";

const initialState = {
    iterations: 2,
    radius: standardRadius.value,
};

const changeFOLConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_FOL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};


export default changeFOLConfig;