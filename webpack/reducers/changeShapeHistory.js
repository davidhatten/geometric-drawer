import { DRAW_SHAPE } from '../actions/drawShape';
import React from 'react';
import { CIRCLE_CONFIG, FOL_CONFIG, SQUARE_CONFIG, nameFromConfig } from './../shapeConstants';
import Circle from '../components/Circle';
import Square from '../components/Square';
import FlowerOfLife from '../components/FlowerOfLife';

const shapeTags = {
    [CIRCLE_CONFIG]: Circle,
    [SQUARE_CONFIG]: Square,
    [FOL_CONFIG]: FlowerOfLife,
};

const initialState = {
    history: [],
};

const changeShapeHistory = (state = initialState, action) => {
    switch(action.type) {
    case DRAW_SHAPE:
        console.log(`drawShape - state `, state);
        console.log(`drawShape - action`, action);
        const payload = action.payload;
        const newShape = {id: state.history.length, name: nameFromConfig(payload.shape), shape: shapeTags[payload.shape], props: {...payload.config, ...payload.location, style: payload.style}};
        console.log(`drawShape - newShape `, newShape);
        return {
            history: state.history.concat(newShape),
        };
    default:
        return state;
    }
};

export default changeShapeHistory;