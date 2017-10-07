import Circle from "./containers/shapes/Circle";
import CircleForm from "./components/forms/CircleForm";
import Square from "./containers/shapes/Square";
import SquareForm from "./components/forms/SquareForm";
import FlowerOfLife from "./containers/shapes/FlowerOfLife";
import FlowerOfLifeForm from "./components/forms/FlowerOfLifeForm";
import { changeHistoryProp, changeHistoryStyle } from "./actions/changeHistoryProp";
import RoundedPetal from "./containers/shapes/RoundedPetal";
import RoundedPetalForm from "./components/forms/RoundedPetalForm";

export const CIRCLE_NAME = `Circle`;
export const SQUARE_NAME = `Square`;
export const FOL_NAME = `Flower of Life`;
export const ROUNDED_PETAL_NAME = `Rounded Petal`;

export const FOL_CONFIG = `FOL_CONFIG`;
export const CIRCLE_CONFIG = `CIRCLE_CONFIG`;
export const SQUARE_CONFIG = `SQUARE_CONFIG`;
export const ROUNDED_PETAL_CONFIG = `ROUNDED_PETAL_CONFIG`;

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
            lineWidth: lineWidthState(state, id),
        }),
        dispatchToProps: id => dispatch => ({
            updateInnerRadius: value => {dispatch(changeHistoryProp(id, `innerRadius`, parseInt(value)));},
            updateOuterRadius: value => {dispatch(changeHistoryProp(id, `outerRadius`, parseInt(value)));},
            updateXControl: value => {dispatch(changeHistoryProp(id, `xControl`, parseInt(value)));},
            updateYControl: value => {dispatch(changeHistoryProp(id, `yControl`, parseInt(value)));},
            updateAxes: value => {dispatch(changeHistoryProp(id, `axes`, parseInt(value)));},
            updateLineWidth: lineWidthDispatch(dispatch, id),
        }),
    },
};