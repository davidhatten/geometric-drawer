import { updateShapeConfigValue } from "../stateUtil";
import { CHANGE_MANUAL_CURVEY_PETAL_CONFIG } from "../actions/changeManualCurveyPetalConfig";

const initialState = {
    innerRadius: 300,
    outerRadius: 500,
    axes: 6,
    outerXLeftControl: 170,
    outerXRightControl: 670,
    outerYLeftControl: 570,
    outerYRightControl: 320,
    innerXLeftControl: 220,
    innerXRightControl: 200,
    innerYLeftControl: -50,
    innerYRightControl: 100,
    outerGap: 0,
    innerGap: 0,
    rotation: 0,
};

const changeManualCurveyPetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_MANUAL_CURVEY_PETAL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeManualCurveyPetalConfig;