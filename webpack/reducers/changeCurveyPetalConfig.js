import { CHANGE_CURVEY_PETAL_CONFIG } from "../actions/changeCurveyPetalConfig";
import { updateShapeConfigValue } from "../stateUtil";

const initialState = {
    innerRadius: 300,
    outerRadius: 500,
    axes: 6,
    innerXControl: 150,
    innerYControl: 50,
    outerXControl: 120,
    outerYControl: 70,
    outerGap: 0,
    innerGap: 0,
    rotation: 0,
};

const changeCurveyPetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_CURVEY_PETAL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeCurveyPetalConfig;