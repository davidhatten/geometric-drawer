import { CHANGE_MANUAL_ROUNDED_PETAL_CONFIG } from "../actions/changeManualRoundedPetalConfig";
import { updateShapeConfigValue } from "../stateUtil";

const initialState = {
    innerRadius: 300,
    outerRadius: 500,
    axes: 6,
    innerXLeftControl: 220,
    innerXRightControl: 200,
    innerYLeftControl: -50,
    innerYRightControl: 100,
    outerGap: 0,
    innerGap: 0,
    rotation: 0,
};

const changeManualRoundedPetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_MANUAL_ROUNDED_PETAL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeManualRoundedPetalConfig;