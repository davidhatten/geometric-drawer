import Circle from "./containers/shapes/Circle";
import CircleForm from "./components/forms/CircleForm";
import Square from "./containers/shapes/Square";
import SquareForm from "./components/forms/SquareForm";
import FlowerOfLife from "./containers/shapes/FlowerOfLife";
import FlowerOfLifeForm from "./components/forms/FlowerOfLifeForm";
import { changeHistoryProp, changeHistoryStyle } from "./actions/changeHistoryProp";
import RoundedPetal from "./containers/shapes/RoundedPetal";
import RoundedPetalForm from "./components/forms/RoundedPetalForm";
import { changeHistoryInnerRadius, changeHistoryOuterRadius } from "./actions/changeRoundedPetalConfig";
import CirclePetal from "./containers/shapes/CirclePetal";
import CirclePetalForm from "./components/forms/CirclePetalForm";
import CurveyPetal from "./containers/shapes/CurveyPetal";
import CurveyPetalForm from "./components/forms/CurveyPetalForm";
import { changeHistoryCurveyInnerRadius, changeHistoryCurveyOuterRadius } from "./actions/changeCurveyPetalConfig";

export const CIRCLE_NAME = `Circle`;
export const SQUARE_NAME = `Square`;
export const FOL_NAME = `Flower of Life`;
export const ROUNDED_PETAL_NAME = `Rounded Petals`;
export const CIRCLE_PETAL_NAME = `Circle Petals`;
export const CURVEY_PETAL_NAME = `Curvey Petals`;

export const FOL_CONFIG = `FOL_CONFIG`;
export const CIRCLE_CONFIG = `CIRCLE_CONFIG`;
export const SQUARE_CONFIG = `SQUARE_CONFIG`;
export const ROUNDED_PETAL_CONFIG = `ROUNDED_PETAL_CONFIG`;
export const CIRCLE_PETAL_CONFIG = `CIRCLE_PETAL_CONFIG`;
export const CURVEY_PETAL_CONFIG = `CURVEY_PETAL_CONFIG`

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

const configToNameMap = {
    [FOL_CONFIG]: FOL_NAME,
    [CIRCLE_CONFIG]: CIRCLE_NAME,
    [SQUARE_CONFIG]: SQUARE_NAME,
    [ROUNDED_PETAL_CONFIG]: ROUNDED_PETAL_NAME,
    [CIRCLE_PETAL_CONFIG]: CIRCLE_PETAL_NAME,
    [CURVEY_PETAL_CONFIG]: CURVEY_PETAL_NAME,
};

export const nameFromConfig = name => {
    return configToNameMap[name];
};

const lineWidthState = (state, id) => (
    state.shapeStyle.byId[id].strokeWidth
);

const lineWidthDispatch = (dispatch, id) => (value) => (
    dispatch(changeHistoryStyle(id, `strokeWidth`, parseInt(value)))
);

// Well it's still awful, but at least now it's contained.
// Maybe need to make an abstract class, or w/e the JS equivalent is
export const historyConstants = {
    [CIRCLE_CONFIG]: {
        shape: Circle,
        form: CircleForm,
        stateToProps: id => state => ({
            radius: state.shapeProps.byId[id].radius,
            lineWidth: lineWidthState(state, id),
        }),
        dispatchToProps: id => dispatch => ({
            updateRadius: (value) => {dispatch(changeHistoryProp(id, `radius`, parseInt(value) ));},
            updateLineWidth: lineWidthDispatch(dispatch, id),
        }),
    },
    [SQUARE_CONFIG]: {
        shape: Square,
        form: SquareForm,
        stateToProps: id => state => ({
            length: state.shapeProps.byId[id].length,
            lineWidth: lineWidthState(state, id),
        }),
        dispatchToProps: id => dispatch => ({
            updateLength: (value) => {dispatch(changeHistoryProp(id, `length`, parseInt(value)));},
            updateLineWidth: lineWidthDispatch(dispatch, id),
        }),
    },
    [FOL_CONFIG]: {
        shape: FlowerOfLife,
        form: FlowerOfLifeForm,
        stateToProps: id => state => ({
            iterations: state.shapeProps.byId[id].iterations,
            radius: state.shapeProps.byId[id].radius,
            lineWidth: lineWidthState(state, id),
        }),
        dispatchToProps: id => dispatch => ({
            updateIterations: (value) => {dispatch(changeHistoryProp(id, `iterations`, parseInt(value)));},
            updateRadius: (value) => {dispatch(changeHistoryProp(id, `radius`, parseInt(value)));},
            updateLineWidth: lineWidthDispatch(dispatch, id),
        }),
    },
    [ROUNDED_PETAL_CONFIG]: {
        shape: RoundedPetal,
        form: RoundedPetalForm,
        stateToProps: id => state =>({
            innerRadius: state.shapeProps.byId[id].innerRadius,
            outerRadius: state.shapeProps.byId[id].outerRadius,
            xControl: state.shapeProps.byId[id].xControl,
            yControl: state.shapeProps.byId[id].yControl,
            axes: state.shapeProps.byId[id].axes,
            innerGap: state.shapeProps.byId[id].innerGap,
            outerGap: state.shapeProps.byId[id].outerGap,
            rotation: state.shapeProps.byId[id].rotation,
            lineWidth: lineWidthState(state, id),
        }),
        dispatchToProps: id => dispatch => ({
            updateInnerRadius: value => {dispatch(changeHistoryInnerRadius(id, parseInt(value)));},
            updateOuterRadius: value => {dispatch(changeHistoryOuterRadius(id, parseInt(value)));},
            updateXControl: value => {dispatch(changeHistoryProp(id, `xControl`, parseInt(value)));},
            updateYControl: value => {dispatch(changeHistoryProp(id, `yControl`, parseInt(value)));},
            updateAxes: value => {dispatch(changeHistoryProp(id, `axes`, parseInt(value)));},
            updateInnerGap: value => {dispatch(changeHistoryProp(id, `innerGap`, parseInt(value)));},
            updateOuterGap: value => {dispatch(changeHistoryProp(id, `outerGap`, parseInt(value)));},
            updateRotation: value => {dispatch(changeHistoryProp(id, `rotation`, parseInt(value)));},
            updateLineWidth: lineWidthDispatch(dispatch, id),
        }),
    },
    [CIRCLE_PETAL_CONFIG]: {
        shape: CirclePetal,
        form: CirclePetalForm,
        stateToProps: id => state => ({
            ringRadius: state.shapeProps.byId[id].ringRadius,
            petalRadius: state.shapeProps.byId[id].petalRadius,
            rotation: state.shapeProps.byId[id].rotation,
            axes: state.shapeProps.byId[id].axes,
            lineWidth: lineWidthState(state, id),
        }),
        dispatchToProps: id => dispatch => ({
            updateRingRadius : value => {dispatch(changeHistoryProp(id, `ringRadius`, parseInt(value)));},
            updatePetalRadius : value => {dispatch(changeHistoryProp(id, `petalRadius`, parseInt(value)));},
            updateRotation : value => {dispatch(changeHistoryProp(id, `rotation`, parseInt(value)));},
            updateAxes : value => {dispatch(changeHistoryProp(id, `axes`, parseInt(value)));},
            updateLineWidth: lineWidthDispatch(dispatch, id),
        }),
    },
    [CURVEY_PETAL_CONFIG]: {
        shape: CurveyPetal,
        form: CurveyPetalForm,
        stateToProps: id => state => ({
            innerRadius: state.shapeProps.byId[id].innerRadius,
            outerRadius: state.shapeProps.byId[id].outerRadius,
            innerXControl: state.shapeProps.byId[id].innerXControl,
            innerYControl: state.shapeProps.byId[id].innerYControl,
            outerXControl: state.shapeProps.byId[id].outerXControl,
            outerYControl: state.shapeProps.byId[id].outerYControl,
            axes: state.shapeProps.byId[id].axes,
            innerGap: state.shapeProps.byId[id].innerGap,
            outerGap: state.shapeProps.byId[id].outerGap,
            rotation: state.shapeProps.byId[id].rotation,
            lineWidth: lineWidthState(state, id),
        }),
        dispatchToProps: id => dispatch => ({
            updateInnerRadius: value => {dispatch(changeHistoryCurveyInnerRadius(id, parseInt(value)));},
            updateOuterRadius: value => {dispatch(changeHistoryCurveyOuterRadius(id, parseInt(value)));},
            updateInnerXControl: value => {dispatch(changeHistoryProp(id, `innerXControl`, parseInt(value)));},
            updateInnerYControl: value => {dispatch(changeHistoryProp(id, `innerYControl`, parseInt(value)));},
            updateOuterXControl: value => {dispatch(changeHistoryProp(id, `outerXControl`, parseInt(value)));},
            updateOuterYControl: value => {dispatch(changeHistoryProp(id, `outerYControl`, parseInt(value)));},
            updateAxes: value => {dispatch(changeHistoryProp(id, `axes`, parseInt(value)));},
            updateInnerGap: value => {dispatch(changeHistoryProp(id, `innerGap`, parseInt(value)));},
            updateOuterGap: value => {dispatch(changeHistoryProp(id, `outerGap`, parseInt(value)));},
            updateRotation: value => {dispatch(changeHistoryProp(id, `rotation`, parseInt(value)));},
            updateLineWidth: lineWidthDispatch(dispatch, id),
        }),
    },
};