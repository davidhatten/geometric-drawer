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
import {changeManualPrismPetalConfig} from "./actions/changeManualPrismPetalConfig";
import ManualPrismPetal from "./containers/shapes/ManualPrismPetal";
import ManualPrismPetalHistory from "./history/ManualPrismPetalHistory";
import {changeManualClawPetalConfig} from "./actions/changeManualClawPetalConfig";
import ManualClawPetalHistory from "./history/ManualClawPetalHistory";
import ManualClawPetal from "./containers/shapes/ManualClawPetal";
import SvgIcon from "@material-ui/core/SvgIcon";
import React from 'react';
import ShapeIcon from "./components/controls/ShapeIcon";


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
export const MANUAL_CLAW_PETAL_NAME = `Manual ${CLAW_PETAL_NAME}`;

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
export const MANUAL_CLAW_PETAL_CONFIG = `MANUAL_${CLAW_PETAL_NAME}`;

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
        iconSvg: <g><circle cx="1199" cy="1199" r="450"/><circle cx="1199" cy="1649" r="450"/><circle cx="809.2885682970027" cy="1424.0000000000002" r="450"/><circle cx="809.2885682970027" cy="974" r="450"/><circle cx="1199" cy="749" r="450"/><circle cx="1588.7114317029975" cy="974.0000000000001" r="450"/><circle cx="1588.7114317029975" cy="1423.9999999999998" r="450"/></g>,
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
        iconSvg: <rect x="500.5" y="500.5" width="1397" height="1397"/>,
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
        iconSvg: <rect x="399" y="799" width="1600" height="800"/>,
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
        iconSvg: <circle cx="1199" cy="1199" r="850" />,
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
        iconSvg: <g><circle cx="1199" cy="549" r="250"/><circle cx="1761.916512459885" cy="874" r="250"/><circle cx="1761.9165124598853" cy="1523.9999999999998" r="250"/><circle cx="1199" cy="1849" r="250"/><circle cx="636.083487540115" cy="1524.0000000000002" r="250"/><circle cx="636.0834875401149" cy="874" r="250"/></g>,
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
        iconSvg: <g><path d="M 1199 857 Q 890 807 1199 299 L 1199 299 Q 1508 807 1199 857 Z  M 1495.1806880942781 1028 Q 1383.9819582834998 735.3981502306084 1978.4228634059946 748.9999999999999 L 1978.4228634059946 748.9999999999999 Q 1692.9819582834998 1270.6018497693915 1495.1806880942781 1028 Z  M 1495.1806880942781 1370 Q 1692.9819582834998 1127.3981502306083 1978.4228634059948 1648.9999999999998 L 1978.4228634059948 1648.9999999999998 Q 1383.9819582835 1662.6018497693915 1495.1806880942781 1370 Z  M 1199 1541 Q 1508 1591 1199 2099 L 1199 2099 Q 890 1591 1199 1541 Z  M 902.8193119057221 1370.0000000000002 Q 1014.0180417165003 1662.6018497693917 419.5771365940053 1649.0000000000005 L 419.5771365940053 1649.0000000000005 Q 705.0180417165 1127.3981502306087 902.8193119057221 1370.0000000000002 Z  M 902.819311905722 1028 Q 705.0180417165001 1270.6018497693915 419.5771365940053 748.9999999999999 L 419.5771365940053 748.9999999999999 Q 1014.0180417165001 735.3981502306084 902.819311905722 1028 Z "/></g>,
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
        iconSvg: <g><path d="M 1199 899 Q 794 949 1199 249 L 1199 249 Q 1617 535 1199 899 Z  M 1458.8076211353316 1049 Q 1213.0063509461097 723.2597114673024 2021.7241335952167 723.9999999999999 L 2021.7241335952167 723.9999999999999 Q 1983.0408681128672 1228.9986187818954 1458.8076211353316 1049 Z  M 1458.8076211353316 1349 Q 1618.0063509461097 973.2597114673023 2021.7241335952167 1673.9999999999998 L 2021.7241335952167 1673.9999999999998 Q 1565.0408681128674 1892.9986187818952 1458.8076211353316 1349 Z  M 1199 1499 Q 1604 1449 1199.0000000000002 2149 L 1199.0000000000002 2149 Q 781 1863 1199 1499 Z  M 939.1923788646684 1349.0000000000002 Q 1184.9936490538905 1674.7402885326978 376.2758664047834 1674.0000000000005 L 376.2758664047834 1674.0000000000005 Q 414.95913188713257 1169.001381218105 939.1923788646684 1349.0000000000002 Z  M 939.1923788646684 1049 Q 779.9936490538903 1424.7402885326976 376.2758664047833 723.9999999999999 L 376.2758664047833 723.9999999999999 Q 832.9591318871328 505.0013812181046 939.1923788646684 1049 Z "/></g>,
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
        iconSvg: <path d="M 1199 899 C 1027 905 616 114 1199 299 L 1199 299 C 1782 114 1371 905 1199 899 Z  M 1458.8076211353316 1049 C 1367.6114687126249 903.0436305490765 1847.1375631061157 151.60718959367205 1978.4228634059946 748.9999999999999 L 1978.4228634059946 748.9999999999999 C 2430.137563106116 1161.3928104063275 1539.611468712625 1200.9563694509234 1458.8076211353316 1049 Z  M 1458.8076211353316 1349 C 1539.6114687126249 1197.0436305490764 2430.137563106116 1236.607189593672 1978.4228634059948 1648.9999999999998 L 1978.4228634059948 1648.9999999999998 C 1847.137563106116 2246.3928104063275 1367.611468712625 1494.9563694509234 1458.8076211353316 1349 Z  M 1199 1499 C 1371 1493 1782 2284 1199 2099 L 1199 2099 C 616.0000000000001 2284 1027 1493 1199 1499 Z  M 939.1923788646684 1349.0000000000002 C 1030.3885312873751 1494.9563694509236 550.8624368938845 2246.392810406328 419.5771365940053 1649.0000000000005 L 419.5771365940053 1649.0000000000005 C -32.13756310611598 1236.607189593673 858.388531287375 1197.0436305490766 939.1923788646684 1349.0000000000002 Z  M 939.1923788646684 1049 C 858.388531287375 1200.9563694509234 -32.13756310611598 1161.3928104063275 419.5771365940053 748.9999999999999 L 419.5771365940053 748.9999999999999 C 550.8624368938843 151.60718959367205 1030.3885312873751 903.0436305490765 939.1923788646684 1049 Z "/>,
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
        iconSvg: <path d="M 1199 899 C 979 883 865 -347 1199 499 L 1199 499 C 2114 206 1399 814 1199 899 Z  M 1458.8076211353316 1049 C 1362.6640275958825 850.4744111674235 2370.875274250742 136.74751513599722 1805.217782649107 849 L 1805.217782649107 849 C 2516.4632259579475 1494.9132444627612 1632.419780457009 1179.7050807568876 1458.8076211353316 1049 Z  M 1458.8076211353316 1349 C 1582.6640275958825 1166.4744111674233 2704.875274250742 1682.7475151359972 1805.217782649107 1548.9999999999998 L 1805.217782649107 1548.9999999999998 C 1601.463225957948 2487.913244462761 1432.419780457009 1564.7050807568876 1458.8076211353316 1349 Z  M 1199 1499 C 1419 1515 1533.0000000000002 2745 1199 1899 L 1199 1899 C 284.0000000000001 2192 999 1584 1199 1499 Z  M 939.1923788646684 1349.0000000000002 C 1035.3359724041175 1547.5255888325767 27.124725749258232 2261.2524848640032 592.782217350893 1549.0000000000002 L 592.782217350893 1549.0000000000002 C -118.46322595794777 903.0867555372392 765.5802195429911 1218.2949192431124 939.1923788646684 1349.0000000000002 Z  M 939.1923788646684 1049 C 815.3359724041173 1231.5255888325764 -306.875274250742 715.2524848640023 592.782217350893 849 L 592.782217350893 849 C 796.5367740420526 -89.91324446276144 965.5802195429911 833.2949192431122 939.1923788646684 1049 Z "/>,
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
        iconSvg: <path d="M 1199 829 L 999 689 L 1199 249 L 1199 249 L 1399 689 L 1199 829 Z  M 1519.4293994002423 1014 L 1540.6729559300636 770.7949192431122 L 2021.7241335952167 723.9999999999999 L 2021.7241335952167 723.9999999999999 L 1740.6729559300638 1117.2050807568876 L 1519.4293994002423 1014 Z  M 1519.4293994002423 1384 L 1740.6729559300638 1280.7949192431122 L 2021.7241335952167 1673.9999999999998 L 2021.7241335952167 1673.9999999999998 L 1540.6729559300638 1627.2050807568876 L 1519.4293994002423 1384 Z  M 1199 1569 L 1399 1709 L 1199.0000000000002 2149 L 1199.0000000000002 2149 L 999 1709 L 1199 1569 Z  M 878.5706005997578 1384.0000000000002 L 857.3270440699365 1627.205080756888 L 376.2758664047834 1674.0000000000005 L 376.2758664047834 1674.0000000000005 L 657.3270440699363 1280.7949192431124 L 878.5706005997578 1384.0000000000002 Z  M 878.5706005997577 1014 L 657.3270440699363 1117.2050807568876 L 376.2758664047833 723.9999999999999 L 376.2758664047833 723.9999999999999 L 857.3270440699364 770.7949192431122 L 878.5706005997577 1014 Z "/>,
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
        iconSvg: <path d="M 1199 899 L 1055 919 L 1199 249 L 1199 249 L 1576 604 L 1199 899 Z  M 1458.8076211353316 1049 L 1369.4871130596428 934.2923418550408 L 2021.7241335952167 723.9999999999999 L 2021.7241335952167 723.9999999999999 L 1902.785115251741 1227.9915772267332 L 1458.8076211353316 1049 Z  M 1458.8076211353316 1349 L 1513.4871130596428 1214.2923418550408 L 2021.7241335952167 1673.9999999999998 L 2021.7241335952167 1673.9999999999998 L 1525.785115251741 1822.9915772267332 L 1458.8076211353316 1349 Z  M 1199 1499 L 1343 1479 L 1199.0000000000002 2149 L 1199.0000000000002 2149 L 822 1794 L 1199 1499 Z  M 939.1923788646684 1349.0000000000002 L 1028.5128869403572 1463.7076581449592 L 376.2758664047834 1674.0000000000005 L 376.2758664047834 1674.0000000000005 L 495.214884748259 1170.008422773267 L 939.1923788646684 1349.0000000000002 Z  M 939.1923788646684 1049 L 884.5128869403572 1183.7076581449592 L 376.2758664047833 723.9999999999999 L 376.2758664047833 723.9999999999999 L 872.214884748259 575.0084227732666 L 939.1923788646684 1049 Z "/>,
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
        iconSvg: <path d="M 1199 896 L 1055 786 L 1055 359 L 1199 249 L 1199 249 L 1343 359 L 1343 786 L 1199 896 Z  M 1461.405697346685 1047.5 L 1484.6684917629732 867.7923418550408 L 1854.4613391789285 654.2923418550407 L 2021.7241335952167 723.9999999999999 L 2021.7241335952167 723.9999999999999 L 1998.4613391789285 903.707658144959 L 1628.6684917629732 1117.2076581449592 L 1461.405697346685 1047.5 Z  M 1461.405697346685 1350.5 L 1628.6684917629732 1280.7923418550408 L 1998.4613391789285 1494.2923418550406 L 2021.7241335952167 1673.9999999999998 L 2021.7241335952167 1673.9999999999998 L 1854.4613391789285 1743.707658144959 L 1484.6684917629732 1530.2076581449592 L 1461.405697346685 1350.5 Z  M 1199 1502 L 1343 1612 L 1343 2039 L 1199.0000000000002 2149 L 1199.0000000000002 2149 L 1055 2039 L 1055 1612 L 1199 1502 Z  M 936.5943026533151 1350.5000000000002 L 913.331508237027 1530.2076581449592 L 543.5386608210717 1743.7076581449596 L 376.2758664047834 1674.0000000000005 L 376.2758664047834 1674.0000000000005 L 399.5386608210715 1494.2923418550413 L 769.3315082370268 1280.792341855041 L 936.5943026533151 1350.5000000000002 Z  M 936.594302653315 1047.5 L 769.3315082370268 1117.2076581449592 L 399.53866082107163 903.707658144959 L 376.2758664047833 723.9999999999999 L 376.2758664047833 723.9999999999999 L 543.5386608210716 654.2923418550407 L 913.3315082370268 867.7923418550408 L 936.594302653315 1047.5 Z "></path>,
    },
    [MANUAL_PRISM_PETAL_CONFIG]: {
        name: MANUAL_PRISM_PETAL_NAME,
        history: ManualPrismPetalHistory,
        img: `assets/img/manual_prism_petals_80x80.png`,
        form: ManualDoubleControlPointPetalForm,
        paletteStateToProps: state => ({
            ...manualDoubleControlPointRingProps(state, MANUAL_PRISM_PETAL_CONFIG),
        }),
        paletteDispatchToProps: dispatch => ({
            ...manualDoubleControlPointRingDispatch(dispatch, changeManualPrismPetalConfig),
        }),
        description: `A ring of petals, each one with lines controlled by two control points. Each side's control points can be independently adjusted.`,
        shape: ManualPrismPetal,
        iconSvg: <path d="M 1199 957 L 1219 877 L 926 422 L 1199 274 L 1199 274 L 1578 316 L 1339 857 L 1199 957 Z  M 1408.5781477158341 1078 L 1487.8601800185893 1055.3205080756888 L 1735.4017387405088 574.0750647668482 L 2000.0734985006056 736.4999999999999 L 2000.0734985006056 736.4999999999999 L 2153.2004315416593 1085.7236280343022 L 1565.1806880942781 1149.2435565298215 L 1408.5781477158341 1078 Z  M 1408.5781477158341 1320 L 1467.8601800185893 1377.3205080756886 L 2008.4017387405088 1351.075064766848 L 2000.0734985006056 1661.4999999999998 L 2000.0734985006056 1661.4999999999998 L 1774.2004315416593 1968.7236280343022 L 1425.1806880942781 1491.2435565298213 L 1408.5781477158341 1320 Z  M 1199 1441 L 1179 1521 L 1472 1976 L 1199 2124 L 1199 2124 L 820.0000000000001 2082 L 1059 1541 L 1199 1441 Z  M 989.4218522841659 1320 L 910.1398199814108 1342.6794919243114 L 662.5982612594914 1823.9249352331522 L 397.92650149939436 1661.5000000000005 L 397.92650149939436 1661.5000000000005 L 244.79956845834067 1312.2763719656982 L 832.819311905722 1248.7564434701787 L 989.4218522841659 1320 Z  M 989.4218522841659 1078 L 930.1398199814107 1020.6794919243112 L 389.5982612594912 1046.9249352331517 L 397.92650149939425 736.4999999999999 L 397.92650149939425 736.4999999999999 L 623.7995684583407 429.27637196569765 L 972.819311905722 906.7564434701785 L 989.4218522841659 1078 Z "/>,
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
        iconSvg: <path d="M 1023 924 Q 1565 648 1192 272 L 1206 272 Q 1565 648 1375 924 L 1349.1569860407205 909.0795289339387 Q 1859.1799974852256 1240.4652977851044 1998.3055493081747 729.4378221735088 L 2005.3055493081747 741.5621778264909 Q 1859.1799974852256 1240.4652977851044 1525.1569860407208 1213.920471066061 L 1525.1569860407205 1184.0795289339387 Q 1493.1799974852258 1791.4652977851044 2005.3055493081747 1656.4378221735087 L 1998.3055493081747 1668.5621778264908 Q 1493.1799974852258 1791.4652977851044 1349.1569860407208 1488.920471066061 L 1375 1474 Q 833 1750 1206 2126 L 1192 2126 Q 833 1750 1023 1474 L 1048.8430139592795 1488.9204710660613 Q 538.8200025147742 1157.5347022148958 399.6944506918255 1668.5621778264915 L 392.6944506918255 1656.4378221735094 Q 538.8200025147742 1157.5347022148958 872.8430139592793 1184.079528933939 L 872.8430139592793 1213.920471066061 Q 904.8200025147744 606.5347022148953 392.6944506918254 741.5621778264909 L 399.6944506918254 729.4378221735088 Q 904.8200025147744 606.5347022148953 1048.8430139592795 909.0795289339387 Z"></path>,
    },
    [MANUAL_CLAW_PETAL_CONFIG]: {
        name: MANUAL_CLAW_PETAL_NAME,
        history: ManualClawPetalHistory,
        img: `assets/img/manual_claw_petals_80x80.png`,
        form: ManualSingleControlPointPetalForm,
        paletteStateToProps: state => ({ ...manualSingleControlPointRingProps(state, MANUAL_POINTED_PETAL_CONFIG) }),
        paletteDispatchToProps: dispatch => (basicRingDispatch(dispatch, changeManualClawPetalConfig)),
        description: `A ring of petals, each one with 2 lines, each line controlled by a separate control point. Intended to produce a singular closed shape.`,
        shape: ManualClawPetal,
        iconSvg: <path d="M 1029 899 Q 614 276 1199 249 L 1199 249 Q 1455 605 1369 899 L 1373.8076211353316 901.7756813566455 Q 1705.8414476930368 230.87513878610332 2021.7241335952167 723.9999999999999 L 2021.7241335952167 723.9999999999999 Q 1841.4190898479565 1123.7025033688162 1543.8076211353316 1196.2243186433545 L 1543.8076211353316 1201.7756813566452 Q 2290.8414476930366 1153.8751387861032 2021.7241335952167 1673.9999999999998 L 2021.7241335952167 1673.9999999999998 Q 1585.4190898479567 1717.7025033688162 1373.8076211353316 1496.2243186433545 L 1369 1499 Q 1784 2122 1199.0000000000002 2149 L 1199.0000000000002 2149 Q 943.0000000000001 1793 1029 1499 L 1024.1923788646686 1496.2243186433548 Q 692.1585523069637 2167.124861213897 376.2758664047834 1674.0000000000005 L 376.2758664047834 1674.0000000000005 Q 556.5809101520434 1274.297496631184 854.1923788646684 1201.7756813566457 L 854.1923788646684 1196.2243186433545 Q 107.1585523069632 1244.1248612138966 376.2758664047833 723.9999999999999 L 376.2758664047833 723.9999999999999 Q 812.5809101520434 680.2974966311837 1024.1923788646684 901.7756813566455 Z"></path>,
    },
};

export const svgFromConfig = config => {
    return configMap[config].iconSvg;
};

export const boundInnerRadius = (value, outerRadius) => (value < outerRadius ? value : outerRadius - 1);
export const boundOuterRadius = (value, innerRadius) => (value > innerRadius ? value : innerRadius + 1);