import { updateShapeConfigValue } from "../stateUtil";
import {CHANGE_RECTANGLE_CONFIG} from "../actions/changeRectangleConfig";

const initialState = {
    height: 100,
    width: 200,
    rotation: 0,
};

const changeRectangleConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_RECTANGLE_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeRectangleConfig;