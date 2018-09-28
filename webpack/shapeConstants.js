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
import SingleControlPointPetalForm from "./components/forms/SingleControlPointPetalForm";
import {changeRoundedPetalConfig} from "./actions/changeRoundedPetalConfig";
import {changeManualRoundedPetalConfig} from "./actions/changeManualRoundedPetalConfig";
import DoubleControlPointPetalForm from "./components/forms/DoubleControlPointPetalForm";
import {changeCurveyPetalConfig} from "./actions/changeCurveyPetalConfig";
import ManualDoubleControlPointPetalForm from "./components/forms/ManualDoubleControlPointPetalForm";
import {changeManualCurveyPetalConfig} from "./actions/changeManualCurveyPetalConfig";
import {changePointedPetalConfig} from "./actions/changePointedPetalConfig";
import ClawPetalForm from "./components/forms/ClawPetalForm";
import {changeClawPetalConfig} from "./actions/changeClawPetalConfig";
import {changePrismPetalConfig} from "./actions/changePrismPetalConfig";
import FlowerOfLife from "./containers/shapes/FlowerOfLife";
import Square from "./containers/shapes/Square";
import Rectangle from "./containers/shapes/Rectangle";
import Circle from "./containers/shapes/Circle";
import CirclePetal from "./containers/shapes/CirclePetal";
import RoundedPetal from "./containers/shapes/RoundedPetal";
import ManualRoundedPetal from "./containers/shapes/ManualRoundedPetal";
import CurveyPetal from "./containers/shapes/CurveyPetal";
import ManualCurveyPetal from "./containers/shapes/ManualCurveyPetal";
import PointedPetal from "./containers/shapes/PointedPetal";
import ClawPetal from "./containers/shapes/ClawPetal";
import PrismPetal from "./containers/shapes/PrismPetal";
import ManualSingleControlPointPetalForm from "./components/forms/ManualSingleControlPointPetalForm";
import {changeManualPointedPetalConfig} from "./actions/changeManualPointedPetalConfig";
import ManualPointedPetal from "./containers/shapes/ManualPointedPetal";
import ManualPointedPetalHistory from "./history/ManualPointedPetalHistory";
import {changeManualPrismPetalConfig} from "./actions/changeManualPrismPetal";
import ManualPrismPetal from "./containers/shapes/ManualPrismPetal";
import ManualPrismPetalHistory from "./history/ManualPrismPetalHistory";

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
export const MANUAL_POINTED_PETAL_NAME = `Manual ${POINTED_PETAL_NAME}`;
export const MANUAL_PRISM_PETAL_NAME = `Manual ${PRISM_PETAL_NAME}`;

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
export const MANUAL_POINTED_PETAL_CONFIG = `MANUAL_${POINTED_PETAL_CONFIG}`;
export const MANUAL_PRISM_PETAL_CONFIG = `MANUAL_${PRISM_PETAL_CONFIG}`;

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
    updateInnerXLeftControl: value => {dispatch(action(`innerXLeftControl`, value));},
    updateInnerXRightControl: value => {dispatch(action(`innerXRightControl`, value));},
    updateInnerYLeftControl: value => {dispatch(action(`innerYLeftControl`, value));},
    updateInnerYRightControl: value => {dispatch(action(`innerYRightControl`, value));},
});

export const manualDoubleControlPointRingDispatch = (dispatch, action) => ({
    ...manualSingleControlPointRingDispatch(dispatch, action),
    updateOuterXLeftControl: value => {dispatch(action(`outerXLeftControl`, value));},
    updateOuterXRightControl: value => {dispatch(action(`outerXRightControl`, value));},
    updateOuterYLeftControl: value => {dispatch(action(`outerYLeftControl`, value));},
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
        const outerRadius = state[state.selectShape.selectedShape].outerRadius;

        dispatch(action(`innerRadius`, boundInnerRadius(value, outerRadius) ));
    };
};

const changeOuterRadius = (action, value) => {
    return (dispatch, getState) => {
        const state = getState();
        const innerRadius = state[state.selectShape.selectedShape].innerRadius;

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
        description: `A circle drawn, centered where you click, followed by layers of intersecting circles to form a flower.`,
        shape: FlowerOfLife,
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
        description: `A simple square, centered on your click.`,
        shape: Square,
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
        description: `A simple rectangle, centered on your click.`,
        shape: Rectangle,
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
        description: `A simple circle, centered on your click.`,
        shape: Circle,
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
        description: `A ring of petals, each one a small circle, centered on your click.`,
        shape: CirclePetal,
    },
    [ROUNDED_PETAL_CONFIG]: {
        name: ROUNDED_PETAL_NAME,
        history: RoundedPetalHistory,
        img: `assets/img/rounded_petals_80x80.png`,
        form: SingleControlPointPetalForm,
        paletteStateToProps: state => ({ ...basicRingProps(state, ROUNDED_PETAL_CONFIG) }),
        paletteDispatchToProps: dispatch => ({ ...basicRingDispatch(dispatch, changeRoundedPetalConfig) }),
        description: `A ring of petals, each rounded out by gravitating towards a control point. For more info, see 'SVG Quadratic Path'.`,
        shape: RoundedPetal,
    },
    [MANUAL_ROUNDED_PETAL_CONFIG]: {
        name: MANUAL_ROUNDED_PETAL_NAME,
        history: ManualRoundedPetalHistory,
        img: `assets/img/manual_rounded_petals_80x80.png`,
        form: ManualSingleControlPointPetalForm,
        paletteStateToProps: state => ({ ...manualSingleControlPointRingProps(state, MANUAL_ROUNDED_PETAL_CONFIG) }),
        paletteDispatchToProps: dispatch => ({ ...manualSingleControlPointRingDispatch(dispatch, changeManualRoundedPetalConfig) }),
        description: `A ring of petals, each rounded out by gravitating towards a control point. Each arm has its own distinct control point. For more info, see 'SVG Quadratic Path'`,
        shape: ManualRoundedPetal,
    },
    [CURVEY_PETAL_CONFIG]: {
        name: CURVEY_PETAL_NAME,
        history: CurveyPetalHistory,
        img: `assets/img/curvey_petals_80x80.png`,
        form: DoubleControlPointPetalForm,
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
        description: `A ring of petals, each each one rounded out by two control points. For more info, see 'SVG Bezier Curve'.`,
        shape: CurveyPetal,
    },
    [MANUAL_CURVEY_PETAL_CONFIG]: {
        name: MANUAL_CURVEY_PETAL_NAME,
        history: ManualCurveyPetalHistory,
        img: `assets/img/manual_curvey_petals_80x80.png`,
        form: ManualDoubleControlPointPetalForm,
        paletteStateToProps: state => ({
            ...manualDoubleControlPointRingProps(state, MANUAL_CURVEY_PETAL_CONFIG),
        }),
        paletteDispatchToProps: dispatch => ({
            ...manualDoubleControlPointRingDispatch(dispatch, changeManualCurveyPetalConfig),
        }),
        description: `A ring of petals, each each one rounded out by two control points. Each arm has its own set of distinct control points. For more info, see 'SVG Bezier Curve'.`,
        shape: ManualCurveyPetal,
    },
    [POINTED_PETAL_CONFIG]: {
        name: POINTED_PETAL_NAME,
        history: PointedPetalHistory,
        img: `assets/img/pointed_petals_80x80.png`,
        form: SingleControlPointPetalForm,
        paletteStateToProps: state => (basicRingProps(state, POINTED_PETAL_CONFIG)),
        paletteDispatchToProps: dispatch => (basicRingDispatch(dispatch, changePointedPetalConfig)),
        description: `A ring of petals, each one with lines meeting at the control points.`,
        shape: PointedPetal,
    },
    [MANUAL_POINTED_PETAL_CONFIG]: {
        name: MANUAL_POINTED_PETAL_NAME,
        history: ManualPointedPetalHistory,
        img: `assets/img/manual_pointed_petals_80x80.png`,
        form: ManualSingleControlPointPetalForm,
        paletteStateToProps: state => ({ ...manualSingleControlPointRingProps(state, MANUAL_POINTED_PETAL_CONFIG) }),
        paletteDispatchToProps: dispatch => ({ ...manualSingleControlPointRingDispatch(dispatch, changeManualPointedPetalConfig) }),
        description: `A ring of petals, each one with lines meeting at the control points. Each side's control points can be independently adjusted.`,
        shape: ManualPointedPetal,
    },
    [PRISM_PETAL_CONFIG]: {
        name: PRISM_PETAL_NAME,
        history: PrismPetalHistory,
        img: `assets/img/prism_petals_80x80.png`,
        form: DoubleControlPointPetalForm,
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
        description: `A ring of petals, each one with lines controlled by two control points.`,
        shape: PrismPetal,
    },
    [MANUAL_PRISM_PETAL_CONFIG]: {
        name: MANUAL_PRISM_PETAL_NAME,
        history: ManualPrismPetalHistory,
        img: ``,
        form: ManualDoubleControlPointPetalForm,
        paletteStateToProps: state => ({
            ...manualDoubleControlPointRingProps(state, MANUAL_PRISM_PETAL_CONFIG),
        }),
        paletteDispatchToProps: dispatch => ({
            ...manualDoubleControlPointRingDispatch(dispatch, changeManualPrismPetalConfig),
        }),
        description: `A ring of petals, each one with lines controlled by two control points. Each side's control points can be independently adjusted.`,
        shape: ManualPrismPetal,
    },
    [CLAW_PETAL_CONFIG]: {
        name: CLAW_PETAL_NAME,
        history: ClawPetalHistory,
        img: `assets/img/claw_petals_80x80.png`,
        form: ClawPetalForm,
        paletteStateToProps: state => (basicRingProps(state, CLAW_PETAL_CONFIG)),
        paletteDispatchToProps: dispatch => (basicRingDispatch(dispatch, changeClawPetalConfig)),
        description: `A ring of petals, each one with lines controlled by a single control point. Intended to produce a singular closed shape.`,
        shape: ClawPetal,
    },
};

export const imgFromConfig = config => {
    return configMap[config].img;
};

export const boundInnerRadius = (value, outerRadius) => (value < outerRadius ? value : outerRadius - 1);
export const boundOuterRadius = (value, innerRadius) => (value > innerRadius ? value : innerRadius + 1);