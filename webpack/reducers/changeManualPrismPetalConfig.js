import { updateShapeConfigValue } from "../stateUtil";
import {CHANGE_MANUAL_PRISM_PETAL_CONFIG} from "../actions/changeManualPrismPetalConfig";


const initialState = {
    outerRadius: 800,
    innerRadius: 300,
    outerXLeftControl: 170,
    outerXRightControl: 200,
    outerYLeftControl: -150,
    outerYRightControl: 40,
    innerXLeftControl: -20,
    innerXRightControl: 140,
    innerYLeftControl: 80,
    innerYRightControl: 100,
    outerGap: 0,
    innerGap: 0,
    axes: 6,
    rotation: 0,
};

const changeManualPrismPetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_MANUAL_PRISM_PETAL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeManualPrismPetalConfig;