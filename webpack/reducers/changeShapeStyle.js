import React from 'react';
import { CHANGE_STYLE } from "../actions/changeHistoryProp";
import { DRAW_SHAPE } from "../actions/drawShape";
import { CLEAR_HISTORY, DELETE_SHAPE } from "../actions/removeShapes";

const initialState = {
    byId: {},
    allIds: [],
};

const changeShapeStyle = (state = initialState, action) => {
    switch (action.type) {
    case DRAW_SHAPE:
        const newId = action.payload.id;
        const newStyle = action.payload.style;
        return {
            byId: {
                ...state.byId,
                [newId]: newStyle,
            },
            allIds: state.allIds.concat(newId),
        };
    case CHANGE_STYLE:
        const { id, style, value } = action.payload;
        return {
            ...state,
            byId: {
                ...state.byId,
                [id]: {
                    ...state.byId[id],
                    [style]: value,
                },
            },
        };
    case DELETE_SHAPE:
        const newById = Object.keys(state.byId).filter(styleId => styleId !== action.payload)
            .reduce((obj, key) => {
                obj[key] = state.byId[key];
                return obj;
            }, {});

        const newAllIds = state.allIds.filter(styleId => styleId !== action.payload);

        return { byId: newById, allIds: newAllIds };
    case CLEAR_HISTORY:
        return { byId: {}, allIds: [] };
    default:
        return state;
    }
};

export default changeShapeStyle;