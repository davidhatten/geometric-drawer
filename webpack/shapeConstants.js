import { changeHistoryProp, changeHistoryStyle } from "./actions/changeHistoryProp";
import CircleHistory from "./history/CircleHistory";
import SquareHistory from "./history/SquareHistory";
import FlowerOfLifeHistory from "./history/FlowerOfLifeHistory";
import RoundedPetalHistory from "./history/RoundedPetalHistory";
import CirclePetalHistory from "./history/CirclePetalHistory";
import CurveyPetalHistory from "./history/CurveyPetalHistory";
import PointedPetalHistory from "./history/PointedPetalHistory";
import ClawPetalHistory from "./history/ClawPetalHistory";

export const CIRCLE_NAME = `Circle`;
export const SQUARE_NAME = `Square`;
export const FOL_NAME = `Flower of Life`;
export const ROUNDED_PETAL_NAME = `Rounded Petals`;
export const CIRCLE_PETAL_NAME = `Circle Petals`;
export const CURVEY_PETAL_NAME = `Curvey Petals`;
export const POINTED_PETAL_NAME = `Pointed Petals`;
export const CLAW_PETAL_NAME = `Claw Petals`;

export const FOL_CONFIG = `FOL_CONFIG`;
export const CIRCLE_CONFIG = `CIRCLE_CONFIG`;
export const SQUARE_CONFIG = `SQUARE_CONFIG`;
export const ROUNDED_PETAL_CONFIG = `ROUNDED_PETAL_CONFIG`;
export const CIRCLE_PETAL_CONFIG = `CIRCLE_PETAL_CONFIG`;
export const CURVEY_PETAL_CONFIG = `CURVEY_PETAL_CONFIG`;
export const POINTED_PETAL_CONFIG = `POINTED_PETAL_CONFIG`;
export const CLAW_PETAL_CONFIG = `CLAW_PETAL_CONFIG`;

export const standardRadius = {
    value: 300,
    min: 1,
    max: 1000,
    name: `Radius`,
};

export const standardSquareLength = {
    value: 400,
    min: 1,
    max: 2500,
    name: `Side Length`,
};

export const standardLineWidth = {
    min: 1,
    max: 500,
    name: `Line Width`,
};

export const basicRingProps = (state, config) => ({
    innerRadius: state[config].innerRadius,
    outerRadius: state[config].outerRadius,
    innerXControl: state[config].innerXControl,
    innerYControl: state[config].innerYControl,
    axes: state[config].axes,
    innerGap: state[config].innerGap,
    outerGap: state[config].outerGap,
    rotation: state[config].rotation, 
});

export const basicRingDispatch = (dispatch, action) => ({
    updateInnerRadius: value => {dispatch(changeInnerRadius(action, value));},
    updateOuterRadius: value => {dispatch(changeOuterRadius(action, value));},
    updateInnerXControl: value => {dispatch(action(`innerXControl`, value));},
    updateInnerYControl: value => {dispatch(action(`innerYControl`, value));},
    updateAxes: value => {dispatch(action(`axes`, value));},
    updateInnerGap: value => {dispatch(action(`innerGap`, value));},
    updateOuterGap: value => {dispatch(action(`outerGap`, value));},
    updateRotation: value => {dispatch(action(`rotation`, value));},
});

export const basicHistoryDispatch = (dispatch, id) => ({
    ...historyRingDispatchWithNoValidation(dispatch, id),
    updateInnerRadius: value => {dispatch(changeHistoryInnerRadius(id, parseInt(value)));},
    updateOuterRadius: value => {dispatch(changeHistoryOuterRadius(id, parseInt(value)));},
});

const historyRingDispatchWithNoValidation = (dispatch, id) => ({
    updateXControl: value => {dispatch(changeHistoryProp(id, `innerXControl`, value));},
    updateYControl: value => {dispatch(changeHistoryProp(id, `innerYControl`, value));},
    updateAxes: value => {dispatch(changeHistoryProp(id, `axes`, value));},
    updateInnerGap: value => {dispatch(changeHistoryProp(id, `innerGap`, value));},
    updateOuterGap: value => {dispatch(changeHistoryProp(id, `outerGap`, value));},
    updateRotation: value => {dispatch(changeHistoryProp(id, `rotation`, value));},
    updateLineWidth: lineWidthDispatch(dispatch, id),
});

// The part of you that's learning Ruby is laughing and crying right here
const configMap = {
    [FOL_CONFIG]: { name: FOL_NAME, history:FlowerOfLifeHistory },
    [CIRCLE_CONFIG]: { name: CIRCLE_NAME, history: CircleHistory },
    [SQUARE_CONFIG]: { name: SQUARE_NAME, history: SquareHistory },
    [ROUNDED_PETAL_CONFIG]: { name: ROUNDED_PETAL_NAME, history: RoundedPetalHistory },
    [CIRCLE_PETAL_CONFIG]: { name: CIRCLE_PETAL_NAME, history: CirclePetalHistory },
    [CURVEY_PETAL_CONFIG]: { name: CURVEY_PETAL_NAME, history: CurveyPetalHistory },
    [POINTED_PETAL_CONFIG]: { name: POINTED_PETAL_NAME, history: PointedPetalHistory },
    [CLAW_PETAL_CONFIG]: { name: CLAW_PETAL_NAME, history: ClawPetalHistory },
};

export const nameFromConfig = config => {
    return configMap[config].name;
};

export const historyClassFromConfig = config => {
    return configMap[config].history;
};

export const lineWidthState = (state, id) => (
    state.shapeStyle.byId[id].strokeWidth
);

export const lineWidthDispatch = (dispatch, id) => (value) => (
    dispatch(changeHistoryStyle(id, `strokeWidth`, parseInt(value)))
);

export const changeInnerRadius = (action, value) => {
    return (dispatch, getState) => {
        const state = getState();
        const outerRadius = state[CLAW_PETAL_CONFIG].outerRadius;

        dispatch(action(`innerRadius`, boundInnerRadius(value, outerRadius) ));
    };
};

export const changeOuterRadius = (action, value) => {
    return (dispatch, getState) => {
        const state = getState();
        const innerRadius = state[CLAW_PETAL_CONFIG].innerRadius;

        dispatch(action(`outerRadius`, boundOuterRadius(value, innerRadius) ));
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