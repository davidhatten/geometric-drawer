import { CURVEY_PETAL_CONFIG } from "../shapeConstants";

export const CHANGE_CURVEY_PETAL_CONFIG = `CHANGE_CURVEY_PETAL_CONFIG`;

export const changeCurveyPetalConfig = (key, value) => ({ type: CHANGE_CURVEY_PETAL_CONFIG, payload: { key: key, value: value }});

export const changeInnerRadius = value => {
    return (dispatch, getState) => {
        const state = getState();
        const outerRadius = state[CURVEY_PETAL_CONFIG].outerRadius;

        dispatch(changeCurveyPetalConfig(`innerRadius`, boundInnerRadius(value, outerRadius) ));
    };
};
export const changeOuterRadius = value => {
    return (dispatch, getState) => {
        const state = getState();
        const innerRadius = state[CURVEY_PETAL_CONFIG].innerRadius;

        dispatch(changeCurveyPetalConfig(`outerRadius`, boundOuterRadius(value, innerRadius) ));
    };
};

const boundInnerRadius = (value, outerRadius) => (value < outerRadius ? value : outerRadius - 1);
const boundOuterRadius = (value, innerRadius) => (value > innerRadius ? value : innerRadius + 1);