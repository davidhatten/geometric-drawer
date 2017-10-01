import { DRAW_SHAPE } from '../actions/drawShape';
import React from 'react';
import { nameFromConfig } from './../shapeConstants';
import { historyConstants } from "../shapeConstants";
import { CHANGE_CIRCLE_HISTORY_RADIUS } from "../actions/changeCircleConfig";

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
        let shapeMetaConfig = historyConstants[payload.shape];
        const newShape = {
            id: id,
            name: nameFromConfig(payload.shape),
            shapeTag: shapeMetaConfig.shape,
            formTag: shapeMetaConfig.form,
            mapStateToProps: shapeMetaConfig.stateToProps(id),
            mapDispatchToProps: shapeMetaConfig.dispatchToProps(id),
            props: {
                ...payload.config,
                ...payload.location,
                style: payload.style,
            },
        };
        console.log(`drawShape - oldState `, state);
        return { byId: { ...state.byId, [id]: newShape }, allIds: state.allIds.concat(id) };
    case CHANGE_CIRCLE_HISTORY_RADIUS:
        console.log(`CHANGE_CIRCLE_HISTORY_RADIUS - state `, state);
        console.log(`CHANGE_CIRCLE_HISTORY_RADIUS - action `, action);
        const shape = state.byId[action.payload.id];
        const shapeId = shape.id;
        const oldProps = shape.props;

        // Something is not okay here with these two lines....
        const newProps = { ...oldProps, radius: { ...oldProps.radius, value: action.payload.value } };
        return {
            ...state,
            byId: {
                ...state.byId,
                [shapeId]: {
                    ...state.byId[shapeId],
                    props: newProps,
                },
            },
        };
    default:
        return state;
    }
};

export default changeShapeHistory;
