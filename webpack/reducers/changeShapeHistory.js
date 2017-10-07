import { DRAW_SHAPE } from '../actions/drawShape';
import React from 'react';
import { nameFromConfig } from './../shapeConstants';
import { historyConstants } from "../shapeConstants";
import { CLEAR_HISTORY, DELETE_SHAPE } from "../actions/removeShapes";

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
        const id = action.payload.id;
        let shapeMetaConfig = historyConstants[payload.shape];
        const newShape = {
            id: id,
            name: nameFromConfig(payload.shape),
            shapeTag: shapeMetaConfig.shape,
            formTag: shapeMetaConfig.form,
            mapStateToProps: shapeMetaConfig.stateToProps(id),
            mapDispatchToProps: shapeMetaConfig.dispatchToProps(id),
            props: id,
            style: id,
        };

        return { byId: { ...state.byId, [id]: newShape }, allIds: state.allIds.concat(id) };
    case CLEAR_HISTORY:
        return { byId: {}, allIds: [] };
    case DELETE_SHAPE:
        const newById = Object.keys(state.byId).filter(shapeId => shapeId !== action.payload)
            .reduce((obj, key) => {
                obj[key] = state.byId[key];
                return obj;
            }, {});

        const newAllIds = state.allIds.filter(shapeId => shapeId !== action.payload);

        return { byId: newById, allIds: newAllIds };
    default:
        return state;
    }
};

export default changeShapeHistory;
