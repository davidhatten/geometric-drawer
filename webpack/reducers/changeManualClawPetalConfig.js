import React from 'react';
import { updateShapeConfigValue } from "../stateUtil";
import { CHANGE_MANUAL_CLAW_PETAL_CONFIG } from "../actions/changeManualClawPetalConfig";

const initialState = {
    innerRadius: 300,
    outerRadius: 660,
    axes: 6,
    innerXLeftControl: 115,
    innerYRightControl: 125,
    innerYLeftControl: 125,
    innerXRightControl: 115,
    outerGap: 0,
    innerGap: 170,
    rotation: 0,
};

const changeManualClawPetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_MANUAL_CLAW_PETAL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeManualClawPetalConfig;