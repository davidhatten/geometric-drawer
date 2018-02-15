import { DRAW_SHAPE } from '../actions/drawShape';
import React from 'react';
import { nameFromConfig } from './../shapeConstants';
import {historyClassFromConfig, historyConstants} from "../shapeConstants";
import CircleHistory from "../history/CircleHistory";
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
        const shapeHistoryClass = historyClassFromConfig(payload.shape);
        const shapeHistory = new shapeHistoryClass(id);
        const newShape = {
            id: id,
            name: nameFromConfig(payload.shape),
            shapeTag: shapeHistory.shape(),
            formTag: shapeHistory.form(),
            mapStateToProps: shapeHistory.stateToProps(),
            mapDispatchToProps: shapeHistory.dispatchToProps(),
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
