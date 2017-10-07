import React from 'react';
import { CHANGE_STYLE } from "../actions/changeHistoryProp";
import { DRAW_SHAPE } from "../actions/drawShape";
import { CLEAR_HISTORY } from "../actions/removeShapes";

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
        const { id, style, value } = action.payload.id;
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
    default:
        return state;
    }
};

export default changeShapeStyle;