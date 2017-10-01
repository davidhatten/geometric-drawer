
import { standardRadius } from "../shapeConstants";
import { CHANGE_CIRCLE_RADIUS } from "../actions/changeCircleConfig";
import { updateShapeConfigValue } from "../stateUtil";

const initialState = {
    radius: { ...standardRadius },
};

const changeCircleConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_CIRCLE_RADIUS:
        return updateShapeConfigValue(state, `radius`, action.payload);
    default:
        return state;
    }
};

export default changeCircleConfig;