import React from 'react';
import { updateShapeConfigValue } from "../stateUtil";
import { CHANGE_CLAW_PETAL_CONFIG } from "../actions/changeClawPetalConfig";

const initialState = {
    innerRadius: 300,
    outerRadius: 660,
    axes: 6,
    innerXControl: 115,
    innerYControl: 125,
    outerGap: 0,
    innerGap: 170,
    rotation: 0,
};

const changeClawPetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_CLAW_PETAL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeClawPetalConfig;