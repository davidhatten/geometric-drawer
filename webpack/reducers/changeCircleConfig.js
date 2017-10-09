import { standardRadius } from "../shapeConstants";
import { CHANGE_CIRCLE_CONFIG } from "../actions/changeCircleConfig";
import { updateShapeConfigValue } from "../stateUtil";

const initialState = {
    radius: standardRadius.value,
};

const changeCircleConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_CIRCLE_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeCircleConfig;