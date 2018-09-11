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
import ManualCurveyPetalHistory from "./history/ManualCurveyPetalHistory";
import {changeFOLConfig} from "./actions/changeFOLConfig";
import FlowerOfLifeForm from "./components/forms/FlowerOfLifeForm";
import SquareForm from "./components/forms/SquareForm";
import {changeSquareConfig} from "./actions/changeSquareConfig";
import RectangleForm from "./components/forms/RectangleForm";
import {changeRectangleConfig} from "./actions/changeRectangleConfig";
import CircleForm from "./components/forms/CircleForm";
import {changeCircleConfig} from "./actions/changeCircleConfig";
import CirclePetalForm from "./components/forms/CirclePetalForm";
import {changeCirclePetalConfig} from "./actions/changeCirclePetalConfig";
import RoundedPetalForm from "./components/forms/RoundedPetalForm";
import {changeRoundedPetalConfig} from "./actions/changeRoundedPetalConfig";
import ManualRoundedPetalForm from "./components/forms/ManualRoundedPetalForm";
import {changeManualRoundedPetalConfig} from "./actions/changeManualRoundedPetalConfig";
import CurveyPetalForm from "./components/forms/CurveyPetalForm";
import {changeCurveyPetalConfig} from "./actions/changeCurveyPetalConfig";
import ManualCurveyPetalForm from "./components/forms/ManualCurveyPetalForm";
import {changeManualCurveyPetalConfig} from "./actions/changeManualCurveyPetalConfig";
import PointedPetalForm from "./components/forms/PointedPetalForm";
import {changePointedPetalConfig} from "./actions/changePointedPetalConfig";
import ClawPetalForm from "./components/forms/ClawPetalForm";
import {changeClawPetalConfig} from "./actions/changeClawPetalConfig";
import PrismPetalForm from "./components/forms/PrismPetalForm";
import {changePrismPetalConfig} from "./actions/changePrismPetalConfig";

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
export const MANUAL_ROUNDED_PETAL_NAME = `Manual ${ROUNDED_PETAL_NAME}`;
export const MANUAL_CURVEY_PETAL_NAME = `Manual ${CURVEY_PETAL_NAME}`;

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
export const MANUAL_ROUNDED_PETAL_CONFIG = `MANUAL_${ROUNDED_PETAL_CONFIG}`;
export const MANUAL_CURVEY_PETAL_CONFIG = `MANUAL_${CURVEY_PETAL_CONFIG}`;

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

export const manualDoubleControlPointRingProps = (state, config) => ({
    outerXLeftControl: state[config].outerXLeftControl,
    outerXRightControl: state[config].outerXRightControl,
    outerYLeftControl: state[config].outerYLeftControl,
    outerYRightControl: state[config].outerYRightControl,
    ...manualSingleControlPointRingProps(state, config),
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

export const manualDoubleControlPointRingDispatch = (dispatch, action) => ({
    ...manualSingleControlPointRingDispatch(dispatch, action),
    updateOuterXLeftControl: value => {dispatch(action(`outerXleftControl`, value));},
    updateOuterXRightControl: value => {dispatch(action(`outerXRightControl`, value));},
    updateOuterYLeftControl: value => {dispatch(action(`outerYleftControl`, value));},
    updateOuterYRightControl: value => {dispatch(action(`outerYRightControl`, value));},
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
export const configMap = {
    [FOL_CONFIG]: {
        name: FOL_NAME,
        history: FlowerOfLifeHistory,
        img: `assets/img/fol_80x80.png`,
        paletteStateToProps: state => ({
            iterations: state[FOL_CONFIG].iterations,
            radius: state[FOL_CONFIG].radius,
        }),
        paletteDispatchToProps: dispatch => ({
            updateIterations: (value) => {
                dispatch(changeFOLConfig(`iterations`, parseInt(value)));
            },
            updateRadius: (value) => {
                dispatch(changeFOLConfig(`radius`, parseInt(value)));
            },
        }),
        form: FlowerOfLifeForm,
        description: ``,
    },
    [SQUARE_CONFIG]: {
        name: SQUARE_NAME,
        history: SquareHistory,
        img: `assets/img/square_80x80.png`,
        form: SquareForm,
        paletteStateToProps: state => ({
            length: state[SQUARE_CONFIG].length,
            rotation: state[SQUARE_CONFIG].rotation,
        }),
        paletteDispatchToProps: dispatch => ({
            updateLength: (value) => {dispatch(changeSquareConfig(`length`, parseInt(value)));},
            updateRotation: (value) => {dispatch(changeSquareConfig(`rotation`, parseInt(value)));},
        }),
        description: ``,
    },
    [RECTANGLE_CONFIG]: {
        name: RECTANGLE_NAME,
        history: RectangleHistory,
        img: `assets/img/rectangle_80x80.png`,
        form: RectangleForm,
        paletteStateToProps: state => ({
            height: state[RECTANGLE_CONFIG].height,
            width: state[RECTANGLE_CONFIG].width,
            rotation: state[RECTANGLE_CONFIG].rotation,
        }),
        paletteDispatchToProps: dispatch => ({
            updateHeight: (value) => {dispatch(changeRectangleConfig(`height`, parseInt(value)));},
            updateWidth: (value) => {dispatch(changeRectangleConfig(`width`, parseInt(value)));},
            updateRotation: (value) => {dispatch(changeRectangleConfig(`rotation`, parseInt(value)));},
        }),
        description: ``,
    },
    [CIRCLE_CONFIG]: {
        name: CIRCLE_NAME,
        history: CircleHistory,
        img: `assets/img/circle_80x80.png`,
        form: CircleForm,
        paletteStateToProps: state => ({
            radius: state[CIRCLE_CONFIG].radius,
        }),
        paletteDispatchToProps: dispatch => ({
            updateRadius: (value) => {dispatch(changeCircleConfig(`radius`, parseInt(value)));},
        }),
        description: ``,
    },
    [CIRCLE_PETAL_CONFIG]: {
        name: CIRCLE_PETAL_NAME,
        history: CirclePetalHistory,
        img: `assets/img/circle_petals_80x80.png`,
        form: CirclePetalForm,
        paletteStateToProps: state => ({
            ringRadius: state[CIRCLE_PETAL_CONFIG].ringRadius,
            petalRadius: state[CIRCLE_PETAL_CONFIG].petalRadius,
            rotation: state[CIRCLE_PETAL_CONFIG].rotation,
            axes: state[CIRCLE_PETAL_CONFIG].axes,
        }),
        paletteDispatchToProps: dispatch => ({
            updateRingRadius: value => {dispatch(changeCirclePetalConfig(`ringRadius`, parseInt(value)));},
            updatePetalRadius: value => {dispatch(changeCirclePetalConfig(`petalRadius`, parseInt(value)));},
            updateRotation: value => {dispatch(changeCirclePetalConfig(`rotation`, parseInt(value)));},
            updateAxes: value => {dispatch(changeCirclePetalConfig(`axes`, parseInt(value)));},
        }),
        description: ``,
    },
    [ROUNDED_PETAL_CONFIG]: {
        name: ROUNDED_PETAL_NAME,
        history: RoundedPetalHistory,
        img: `assets/img/rounded_petals_80x80.png`,
        form: RoundedPetalForm,
        paletteStateToProps: state => (basicRingProps(state, ROUNDED_PETAL_CONFIG)),
        paletteDispatchToProps: dispatch => (basicRingDispatch(dispatch, changeRoundedPetalConfig)),
        description: ``,
    },
    [MANUAL_ROUNDED_PETAL_CONFIG]: {
        name: MANUAL_ROUNDED_PETAL_NAME,
        history: ManualRoundedPetalHistory,
        img: `assets/img/manual_rounded_petals_80x80.png`,
        form: ManualRoundedPetalForm,
        paletteStateToProps: state => ({
            ...manualSingleControlPointRingProps(state, MANUAL_ROUNDED_PETAL_CONFIG),
        }),
        paletteDispatchToProps: dispatch => ({
            ...manualSingleControlPointRingDispatch(dispatch, changeManualRoundedPetalConfig),
        }),
        description: ``,
    },
    [CURVEY_PETAL_CONFIG]: {
        name: CURVEY_PETAL_NAME,
        history: CurveyPetalHistory,
        img: `assets/img/curvey_petals_80x80.png`,
        form: CurveyPetalForm,
        paletteStateToProps: state => ({
            ...basicRingProps(state, CURVEY_PETAL_CONFIG),
            outerXControl: state[CURVEY_PETAL_CONFIG].outerXControl,
            outerYControl: state[CURVEY_PETAL_CONFIG].outerYControl,
        }),
        paletteDispatchToProps: dispatch => ({
            ...basicRingDispatch(dispatch, changeCurveyPetalConfig),
            updateOuterXControl: value => {dispatch(changeCurveyPetalConfig(`outerXControl`, value));},
            updateOuterYControl: value => {dispatch(changeCurveyPetalConfig(`outerYControl`, value));},
        }),
        description: ``,
    },
    [MANUAL_CURVEY_PETAL_CONFIG]: {
        name: MANUAL_CURVEY_PETAL_NAME,
        history: ManualCurveyPetalHistory,
        img: ``,
        form: ManualCurveyPetalForm,
        paletteStateToProps: state => ({
            ...manualDoubleControlPointRingProps(state, MANUAL_CURVEY_PETAL_CONFIG),
        }),
        paletteDispatchToProps: dispatch => ({
            ...manualDoubleControlPointRingDispatch(dispatch, changeManualCurveyPetalConfig),
        }),
        description: ``,
    },
    [POINTED_PETAL_CONFIG]: {
        name: POINTED_PETAL_NAME,
        history: PointedPetalHistory,
        img: `assets/img/pointed_petals_80x80.png`,
        form: PointedPetalForm,
        paletteStateToProps: state => (basicRingProps(state, POINTED_PETAL_CONFIG)),
        paletteDispatchToProps: dispatch => (basicRingDispatch(dispatch, changePointedPetalConfig)),
        description: ``,
    },
    [CLAW_PETAL_CONFIG]: {
        name: CLAW_PETAL_NAME,
        history: ClawPetalHistory,
        img: `assets/img/claw_petals_80x80.png`,
        form: ClawPetalForm,
        paletteStateToProps: state => (basicRingProps(state, CLAW_PETAL_CONFIG)),
        paletteDispatchToProps: dispatch => (basicRingDispatch(dispatch, changeClawPetalConfig)),
        description: ``,
    },
    [PRISM_PETAL_CONFIG]: {
        name: PRISM_PETAL_NAME,
        history: PrismPetalHistory,
        img: `assets/img/prism_petals_80x80.png`,
        form: PrismPetalForm,
        paletteStateToProps: state => ({
            ...basicRingProps(state, CURVEY_PETAL_CONFIG),
            outerXControl: state[CURVEY_PETAL_CONFIG].outerXControl,
            outerYControl: state[CURVEY_PETAL_CONFIG].outerYControl,
        }),
        paletteDispatchToProps: dispatch => ({
            ...basicRingDispatch(dispatch, changePrismPetalConfig),
            updateOuterXControl: value => {dispatch(changePrismPetalConfig(`outerXControl`, value));},
            updateOuterYControl: value => {dispatch(changePrismPetalConfig(`outerYControl`, value));},
        }),
        description: ``,
    },
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