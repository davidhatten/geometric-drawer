import { ROUNDED_PETAL_CONFIG } from "../shapeConstants";
import { changeHistoryProp } from "./changeHistoryProp";

export const CHANGE_ROUNDED_PETAL_CONFIG = `CHANGE_ROUNDED_PETAL_CONFIG`;

export const changeRoundedPetalConfig = (key, value) => ({ type: CHANGE_ROUNDED_PETAL_CONFIG, payload: { key: key, value: value }})

export const changeInnerRadius = value => {
    return (dispatch, getState) => {
        const state = getState();
        const outerRadius = state[ROUNDED_PETAL_CONFIG].outerRadius;

        dispatch(changeRoundedPetalConfig(`innerRadius`, boundInnerRadius(value, outerRadius) ));
    };
};
export const changeOuterRadius = value => {
    return (dispatch, getState) => {
        const state = getState();
        const innerRadius = state[ROUNDED_PETAL_CONFIG].innerRadius;

        dispatch(changeRoundedPetalConfig(`outerRadius`, boundOuterRadius(value, innerRadius) ));
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