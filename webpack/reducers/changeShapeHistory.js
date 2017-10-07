import { DRAW_SHAPE } from '../actions/drawShape';
import React from 'react';
import { nameFromConfig } from './../shapeConstants';
import { historyConstants } from "../shapeConstants";
import { CLEAR_HISTORY, DELETE_SHAPE } from "../actions/removeShapes";
import { clearShapeData } from "../stateUtil";

const initialState = {
    byId: {},
    allIds: [],
};

const changeShapeHistory = (state = initialState, action) => {
    switch(action.type) {
    case DRAW_SHAPE:
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
    case DELETE_SHAPE:
        return clearShapeData(state.byId, state.allIds, action.payload);
    case CLEAR_HISTORY:
        return { byId: {}, allIds: [] };
    default:
        return state;
    }
};

export default changeShapeHistory;
