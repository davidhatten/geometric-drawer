import React from 'react';
import {
    CHANGE_ROUNDED_PETAL_CONFIG,
    CHANGE_ROUNDED_PETAL_INNER_RADIUS,
    CHANGE_ROUNDED_PETAL_OUTER_RADIUS, CHANGE_ROUNDED_PETAL_X_CONTROL, CHANGE_ROUNDED_PETAL_Y_CONTROL
} from "../actions/changeRoundedPetalConfig";
import { updateShapeConfigValue } from "../stateUtil";

const initialState = {
    innerRadius: 300,
    outerRadius: 500,
    axes: 6,
    xControl: 150,
    yControl: 50,
    outerGap: 0,
    innerGap: 0,
    rotation: 0,
};

const changeRoundedPetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_ROUNDED_PETAL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeRoundedPetalConfig;