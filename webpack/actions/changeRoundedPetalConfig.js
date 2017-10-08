import { ROUNDED_PETAL_CONFIG } from "../shapeConstants";
import { changeHistoryProp } from "./changeHistoryProp";

export const CHANGE_ROUNDED_PETAL_INNER_RADIUS = `CHANGE_ROUNDED_PETAL_INNER_RADIUS`;
export const CHANGE_ROUNDED_PETAL_OUTER_RADIUS = `CHANGE_ROUNDED_PETAL_OUTER_RADIUS`;
export const CHANGE_ROUNDED_PETAL_X_CONTROL = `CHANGE_ROUNDED_PETAL_X_CONTROL`;
export const CHANGE_ROUNDED_PETAL_Y_CONTROL = `CHANGE_ROUNDED_PETAL_Y_CONTROL`;
export const CHANGE_ROUNDED_PETAL_AXES = `CHANGE_ROUNDED_PETAL_AXES`;
export const CHANGE_ROUNDED_PETAL_INNER_GAP = `CHANGE_ROUNDED_PETAL_INNER_GAP`
export const CHANGE_ROUNDED_PETAL_OUTER_GAP = `CHANGE_ROUNDED_PETAL_OUTER_GAP`;
export const CHANGE_ROUNDED_PETAL_ROTATION = `CHANGE_ROUNDED_PETAL_ROTATION`;

export const changeInnerRadius = value => {
    return (dispatch, getState) => {
        const state = getState();
        const outerRadius = state[ROUNDED_PETAL_CONFIG].outerRadius;

        dispatch({ type: CHANGE_ROUNDED_PETAL_INNER_RADIUS, payload: boundInnerRadius(value, outerRadius) });
    };
};
export const changeOuterRadius = value => {
    return (dispatch, getState) => {
        const state = getState();
        const innerRadius = state[ROUNDED_PETAL_CONFIG].innerRadius;

        dispatch({ type: CHANGE_ROUNDED_PETAL_OUTER_RADIUS, payload: boundOuterRadius(value, innerRadius) });
    };
};
export const changeXControl = value => ({ type: CHANGE_ROUNDED_PETAL_X_CONTROL, payload: value });
export const changeYControl = value => ({ type: CHANGE_ROUNDED_PETAL_Y_CONTROL, payload: value });
export const changeAxes = value => ({ type: CHANGE_ROUNDED_PETAL_AXES, payload: value });
export const changeInnerGap = value => ({ type: CHANGE_ROUNDED_PETAL_INNER_GAP, payload: value });
export const changeOuterGap = value => ({ type: CHANGE_ROUNDED_PETAL_OUTER_GAP, payload: value });
export const changeRotation = value => ({ type: CHANGE_ROUNDED_PETAL_ROTATION, payload: value });

export const changeHistoryInnerRadius = (id, value) => {
    return (dispatch, getState) => {
        const state = getState();
        const outerRadius = state.shapeProps.byId[id].outerRadius;

        dispatch(changeHistoryProp(id, `innerRadius`, boundInnerRadius(value, outerRadius)));
    };
};
export const changeHistoryOuterRadius = (id, value) => (dispatch, getState) => {
    const state = getState();
    const innerRadius = state.shapeProps.byId[id].innerRadius;

    dispatch(changeHistoryProp(id, `outerRadius`, boundOuterRadius(value, innerRadius)));
};

const boundInnerRadius = (value, outerRadius) => (value < outerRadius ? value : outerRadius - 1);
const boundOuterRadius = (value, innerRadius) => (value > innerRadius ? value : innerRadius + 1);