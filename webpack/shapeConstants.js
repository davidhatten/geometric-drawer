import { changeHistoryProp, changeHistoryStyle } from "./actions/changeHistoryProp";
import CircleHistory from "./history/CircleHistory";
import SquareHistory from "./history/SquareHistory";
import FlowerOfLifeHistory from "./history/FlowerOfLifeHistory";
import RoundedPetalHistory from "./history/RoundedPetalHistory";
import CirclePetalHistory from "./history/CirclePetalHistory";
import CurveyPetalHistory from "./history/CurveyPetalHistory";
import PointedPetalHistory from "./history/PointedPetalHistory";
import ClawPetalHistory from "./history/ClawPetalHistory";
import PrismPetalHistory from "./history/PrismPetalHistory";
import RectangleHistory from "./history/RectangleHistory";
import ManualRoundedPetalHistory from "./history/ManualRoundedPetalHistory";

export const CIRCLE_NAME = `Circle`;
export const SQUARE_NAME = `Square`;
export const FOL_NAME = `Flower of Life`;
export const ROUNDED_PETAL_NAME = `Rounded Petals`;
export const CIRCLE_PETAL_NAME = `Circle Petals`;
export const CURVEY_PETAL_NAME = `Curvey Petals`;
export const POINTED_PETAL_NAME = `Pointed Petals`;
export const CLAW_PETAL_NAME = `Claw Petals`;
export const PRISM_PETAL_NAME = `Prism Petals`;
export const RECTANGLE_NAME = `Rectangle`;
export const MANUAL_ROUNDED_PETAL_NAME = `Manual Rounded Petals`;

export const FOL_CONFIG = `FOL_CONFIG`;
export const CIRCLE_CONFIG = `CIRCLE_CONFIG`;
export const SQUARE_CONFIG = `SQUARE_CONFIG`;
export const ROUNDED_PETAL_CONFIG = `ROUNDED_PETAL_CONFIG`;
export const CIRCLE_PETAL_CONFIG = `CIRCLE_PETAL_CONFIG`;
export const CURVEY_PETAL_CONFIG = `CURVEY_PETAL_CONFIG`;
export const POINTED_PETAL_CONFIG = `POINTED_PETAL_CONFIG`;
export const CLAW_PETAL_CONFIG = `CLAW_PETAL_CONFIG`;
export const PRISM_PETAL_CONFIG = `PRISM_PETAL_CONFIG`;
export const RECTANGLE_CONFIG = `RECTANGLE_CONFIG`;
export const MANUAL_ROUNDED_PETAL_CONFIG = `MANUAL_ROUNDED_PETAL_CONFIG`;

export const DragTypes = {
    HISTORY_CARD: `historyCard`,
};

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
    innerXControl: state[config].innerXControl,
    innerYControl: state[config].innerYControl,
    ...noControlBasicRingProps(state, config),
});

export const manualSingleControlPointRingProps = (state, config) => ({
    innerXLeftControl: state[config].innerXLeftControl,
    innerXRightControl: state[config].innerXRightControl,
    innerYLeftControl: state[config].innerYLeftControl,
    innerYRightControl: state[config].innerYRightControl,
    ...noControlBasicRingProps(state, config),
});

export const noControlBasicRingProps = (state, config) => ({
    innerRadius: state[config].innerRadius,
    outerRadius: state[config].outerRadius,
    axes: state[config].axes,
    innerGap: state[config].innerGap,
    outerGap: state[config].outerGap,
    rotation: state[config].rotation,
});


export const basicRingDispatch = (dispatch, action) => ({
    ...noControlBasicRingDispatch(dispatch, action),
    updateInnerXControl: value => {dispatch(action(`innerXControl`, value));},
    updateInnerYControl: value => {dispatch(action(`innerYControl`, value));},
});

export const manualSingleControlPointRingDispatch = (dispatch, action) => ({
    ...noControlBasicRingDispatch(dispatch, action),
    updateInnerXLeftControl: value => {dispatch(action(`innerXleftControl`, value));},
    updateInnerXRightControl: value => {dispatch(action(`innerXRightControl`, value));},
    updateInnerYLeftControl: value => {dispatch(action(`innerYleftControl`, value));},
    updateInnerYRightControl: value => {dispatch(action(`innerYRightControl`, value));},
});

export const noControlBasicRingDispatch = (dispatch, action) => ({
    updateInnerRadius: value => {dispatch(changeInnerRadius(action, value));},
    updateOuterRadius: value => {dispatch(changeOuterRadius(action, value));},
    updateAxes: value => {dispatch(action(`axes`, value));},
    updateInnerGap: value => {dispatch(action(`innerGap`, value));},
    updateOuterGap: value => {dispatch(action(`outerGap`, value));},
    updateRotation: value => {dispatch(action(`rotation`, value));},
});

const changeInnerRadius = (action, value) => {
    return (dispatch, getState) => {
        const state = getState();
        const outerRadius = state[CLAW_PETAL_CONFIG].outerRadius;

        dispatch(action(`innerRadius`, boundInnerRadius(value, outerRadius) ));
    };
};

const changeOuterRadius = (action, value) => {
    return (dispatch, getState) => {
        const state = getState();
        const innerRadius = state[CLAW_PETAL_CONFIG].innerRadius;

        dispatch(action(`outerRadius`, boundOuterRadius(value, innerRadius) ));
    };
};

// The part of you that's learning Ruby is laughing and crying right here
const configMap = {
    [FOL_CONFIG]: { name: FOL_NAME, history: FlowerOfLifeHistory, img: `assets/img/fol_80x80.png` },
    [CIRCLE_CONFIG]: { name: CIRCLE_NAME, history: CircleHistory, img: `assets/img/circle_80x80.png` },
    [SQUARE_CONFIG]: { name: SQUARE_NAME, history: SquareHistory, img: `assets/img/square_80x80.png` },
    [RECTANGLE_CONFIG]: { name: RECTANGLE_NAME, history: RectangleHistory, img: `assets/img/rectangle_80x80.png`},
    [ROUNDED_PETAL_CONFIG]: { name: ROUNDED_PETAL_NAME, history: RoundedPetalHistory, img: `assets/img/rounded_petals_80x80.png` },
    [CIRCLE_PETAL_CONFIG]: { name: CIRCLE_PETAL_NAME, history: CirclePetalHistory, img: `assets/img/circle_petals_80x80.png` },
    [CURVEY_PETAL_CONFIG]: { name: CURVEY_PETAL_NAME, history: CurveyPetalHistory, img: `assets/img/curvey_petals_80x80.png` },
    [POINTED_PETAL_CONFIG]: { name: POINTED_PETAL_NAME, history: PointedPetalHistory, img: `assets/img/pointed_petals_80x80.png` },
    [CLAW_PETAL_CONFIG]: { name: CLAW_PETAL_NAME, history: ClawPetalHistory, img: `assets/img/claw_petals_80x80.png` },
    [PRISM_PETAL_CONFIG]: { name: PRISM_PETAL_NAME, history: PrismPetalHistory, img: `assets/img/prism_petals_80x80.png` },
    [MANUAL_ROUNDED_PETAL_CONFIG]: { name: MANUAL_ROUNDED_PETAL_NAME, history: ManualRoundedPetalHistory, img: `assets/img/manual_rounded_petals_80x80.png` },
};

export const nameFromConfig = config => {
    return configMap[config].name;
};

export const historyClassFromConfig = config => {
    return configMap[config].history;
};

export const imgFromConfig = config => {
    return configMap[config].img;
};

export const boundInnerRadius = (value, outerRadius) => (value < outerRadius ? value : outerRadius - 1);
export const boundOuterRadius = (value, innerRadius) => (value > innerRadius ? value : innerRadius + 1);