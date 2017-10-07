import React from 'react';
import {
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
};

const changeRoundedPetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_ROUNDED_PETAL_INNER_RADIUS:
        const innerRadius = action.payload <= state.outerRadius ? action.payload : state.outerRadius;

        return updateShapeConfigValue(state, `innerRadius`, innerRadius);
    case CHANGE_ROUNDED_PETAL_OUTER_RADIUS:
        const outerRadius = action.payload >= state.innerRadius ? action.payload : state.outerRadius;

        return updateShapeConfigValue(state, `outerRadius`, outerRadius);
    case CHANGE_ROUNDED_PETAL_X_CONTROL:
        return updateShapeConfigValue(state, `xControl`, action.payload);
    case CHANGE_ROUNDED_PETAL_Y_CONTROL:
        return updateShapeConfigValue(state, `yControl`, action.payload);
    default:
        return state;
    }
};

export default changeRoundedPetalConfig;