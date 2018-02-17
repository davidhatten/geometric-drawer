import { CLAW_PETAL_CONFIG } from "../shapeConstants";
import { changeHistoryProp } from "./changeHistoryProp";

export const CHANGE_CLAW_PETAL_CONFIG = `CHANGE_CLAW_PETAL_CONFIG`;

export const changeClawPetalConfig = (key, value) => ({ type: CHANGE_ROUNDED_PETAL_CONFIG, payload: { key: key, value: value }})

export const changeInnerRadius = value => {
    return (dispatch, getState) => {
        const state = getState();
        const outerRadius = state[CLAW_PETAL_CONFIG].outerRadius;

        dispatch(changeClawPetalConfig(`innerRadius`, boundInnerRadius(value, outerRadius) ));
    };
};
export const changeOuterRadius = value => {
    return (dispatch, getState) => {
        const state = getState();
        const innerRadius = state[CLAW_PETAL_CONFIG].innerRadius;

        dispatch(changeClawPetalConfig(`outerRadius`, boundOuterRadius(value, innerRadius) ));
    };
};

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