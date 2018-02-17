import React from 'react';
import { updateShapeConfigValue } from "../stateUtil";
import { CHANGE_CLAW_PETAL_CONFIG } from "../actions/changeClawPetalConfig";

const initialState = {
    innerRadius: 300,
    outerRadius: 500,
    axes: 6,
    xControl: 150,
    yControl: 50,
    outerGap: 0,
    innerGap: 50,
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