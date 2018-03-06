import { updateShapeConfigValue } from "../stateUtil";
import { CHANGE_PRISM_PETAL_CONFIG } from "../actions/changePrismPetalConfig";

const initialState = {
    innerRadius: 160,
    outerRadius: 660,
    axes: 6,
    innerXControl: 120,
    innerYControl: 110,
    outerXControl: 120,
    outerYControl: -110,
    outerGap: 0,
    innerGap: 0,
    rotation: 0,
};

const changePrismPetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_PRISM_PETAL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changePrismPetalConfig;