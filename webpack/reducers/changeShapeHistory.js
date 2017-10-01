import { DRAW_SHAPE } from '../actions/drawShape';
import React from 'react';
import { CIRCLE_CONFIG, FOL_CONFIG, SQUARE_CONFIG, nameFromConfig } from './../shapeConstants';

import CircleForm from "../components/CircleForm";
import SquareForm from "../components/SquareForm";
import FlowerOfLifeForm from "../components/FlowerOfLifeForm";
import Circle from "../components/Circle";
import Square from "../components/Square";
import FlowerOfLife from "../components/FlowerOfLife";

const shapeTags = {
    [CIRCLE_CONFIG]: { shape: Circle, form: CircleForm },
    [SQUARE_CONFIG]: { shape: Square, form: SquareForm },
    [FOL_CONFIG]: { shape: FlowerOfLife, form: FlowerOfLifeForm },
};


const initialState = {
    byId: {},
    allIds: [],
};

const changeShapeHistory = (state = initialState, action) => {
    switch(action.type) {
    case DRAW_SHAPE:
        console.log(`drawShape - state `, state);
        console.log(`drawShape - action`, action);
        const payload = action.payload;
        const id = state.allIds.length;
        const newShape = {
            id: id,
            name: nameFromConfig(payload.shape),
            shapeTag: shapeTags[payload.shape].shape,
            formTag: shapeTags[payload.shape].form,
            props: {
                ...payload.config,
                ...payload.location,
                style: payload.style,
            },
        };
        console.log(`drawShape - oldState `, state);
        return { byId: { ...state.byId, [id]: newShape }, allIds: state.allIds.concat(id) };
    default:
        return state;
    }
};

export default changeShapeHistory;
