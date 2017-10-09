import { CHANGE_CIRCLE_PETAL_CONFIG } from "../actions/changeCirclePetalConfig";
import { updateShapeConfigValue } from "../stateUtil";

const initialState = {
    ringRadius: 300,
    petalRadius: 100,
    rotation: 0,
    axes: 6,
};

const changeCirclePetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_CIRCLE_PETAL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeCirclePetalConfig;