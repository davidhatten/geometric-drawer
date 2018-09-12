import { DRAW_SHAPE } from '../actions/drawShape';
import React from 'react';
import {configMap, nameFromConfig} from './../shapeConstants';
import { historyClassFromConfig } from "../shapeConstants";
import { CLEAR_HISTORY, DELETE_SHAPE } from "../actions/removeShapes";
import { clearShapeData } from "../stateUtil";
import { CHANGE_ORDER } from "../actions/changeHistoryOrder";

const initialState = {
    byId: {},
    allIds: [],
};

const changeShapeHistory = (state = initialState, action) => {
    switch(action.type) {
    case DRAW_SHAPE: {
        const payload = action.payload;
        const id = action.payload.id;
        const shapeHistoryClass = historyClassFromConfig(payload.shape);
        const shapeConfig = configMap[payload.shape];
        const shapeHistory = new shapeHistoryClass(id);
        const newShape = {
            id: id,
            name: shapeConfig.name,
            shapeTag: shapeConfig.shape,
            formTag: shapeConfig.form,
            mapStateToProps: shapeHistory.stateToProps,
            mapDispatchToProps: shapeHistory.dispatchToProps,
            config: payload.shape,
            props: id,
            style: id,
        };

        return { byId: { ...state.byId, [id]: newShape }, allIds: state.allIds.concat(id) };
    }
    case CHANGE_ORDER: {
        const { id, index } = action.payload;

        const newIds = state.allIds.filter((shape_id) => (shape_id !== id));
        newIds.splice(index, 0, id);

        return { ...state, allIds: newIds };
    }
    case DELETE_SHAPE: {
        return clearShapeData(state.byId, state.allIds, action.payload);
    }
    case CLEAR_HISTORY: {
        return { byId: {}, allIds: [] };
    }
    default: {
        return state;
    }
    }
};

export default changeShapeHistory;
