import React from 'react';
import { CHANGE_POINTED_PETAL_CONFIG } from "../actions/changePointedPetalConfig";
import { updateShapeConfigValue } from "../stateUtil";

const initialState = {
    innerRadius: 300,
    outerRadius: 500,
    axes: 6,
    innerXControl: 150,
    innerYControl: 50,
    outerGap: 0,
    innerGap: 0,
    rotation: 0,
};

const changeRoundedPetalConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_POINTED_PETAL_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeRoundedPetalConfig;