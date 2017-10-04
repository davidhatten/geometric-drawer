import Circle from "./components/Circle";
import CircleForm from "./components/CircleForm";
import Square from "./components/Square";
import SquareForm from "./components/SquareForm";
import FlowerOfLife from "./components/FlowerOfLife";
import FlowerOfLifeForm from "./components/FlowerOfLifeForm";
import { changeHistoryProp, changeHistoryStyle } from "./actions/changeHistoryProp";

export const CIRCLE_NAME = `Circle`;
export const SQUARE_NAME = `Square`;
export const FOL_NAME = `Flower of Life`;
export const FOL_CONFIG = `FOL_CONFIG`;
export const CIRCLE_CONFIG = `CIRCLE_CONFIG`;
export const SQUARE_CONFIG = `SQUARE_CONFIG`;

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

const configToNameMap = {
    [FOL_CONFIG]: FOL_NAME,
    [CIRCLE_CONFIG]: CIRCLE_NAME,
    [SQUARE_CONFIG]: SQUARE_NAME,
};

export const nameFromConfig = name => {
    return configToNameMap[name];
};

// Well it's still awful, but at least now it's contained.
// Maybe need to make an abstract class, or w/e the JS equivalent is
export const historyConstants = {
    [CIRCLE_CONFIG]: {
        shape: Circle,
        form: CircleForm,
        stateToProps: id => state => ({
            radius: state.shapeProps.byId[id].radius,
        }),
        dispatchToProps: id => dispatch => ({
            updateRadius: (value) => {dispatch(changeHistoryProp(id, `radius`, parseInt(value) ));},
        }),
    },
    [SQUARE_CONFIG]: {
        shape: Square,
        form: SquareForm,
        stateToProps: id => state => ({
            length: state.shapeProps.byId[id].length,
        }),
        dispatchToProps: id => dispatch => ({
            updateLength: (value) => {dispatch(changeHistoryProp(id, `length`, parseInt(value)));},
        }),
    },
    [FOL_CONFIG]: {
        shape: FlowerOfLife,
        form: FlowerOfLifeForm,
        stateToProps: id => state => ({
            iterations: state.shapeProps.byId[id].iterations,
            radius: state.shapeProps.byId[id].radius,
        }),
        dispatchToProps: id => dispatch => ({
            updateIterations: (value) => {dispatch(changeHistoryProp(id, `iterations`, parseInt(value)));},
            updateRadius: (value) => {dispatch(changeHistoryProp(id, `radius`, parseInt(value)));},
        }),
    },
};