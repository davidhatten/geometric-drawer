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
import CircleHistory from "./history/CircleHistory";
import SquareHistory from "./history/SquareHistory";
import FlowerOfLifeHistory from "./history/FlowerOfLifeHistory";
import RoundedPetalHistory from "./history/RoundedPetalHistory";
import CirclePetalHistory from "./history/CirclePetalHistory";
import CurveyPetalHistory from "./history/CurveyPetalHistory";

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
export const CURVEY_PETAL_CONFIG = `CURVEY_PETAL_CONFIG`;

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

const configToClassMap = {
    [FOL_CONFIG]: FlowerOfLifeHistory,
    [CIRCLE_CONFIG]: CircleHistory,
    [SQUARE_CONFIG]: SquareHistory,
    [ROUNDED_PETAL_CONFIG]: RoundedPetalHistory,
    [CIRCLE_PETAL_CONFIG]: CirclePetalHistory,
    [CURVEY_PETAL_CONFIG]: CurveyPetalHistory,
};

export const nameFromConfig = name => {
    return configToNameMap[name];
};

export const classFromConfig = config => {
    return configToClassMap[config];
};

export const lineWidthState = (state, id) => (
    state.shapeStyle.byId[id].strokeWidth
);

export const lineWidthDispatch = (dispatch, id) => (value) => (
    dispatch(changeHistoryStyle(id, `strokeWidth`, parseInt(value)))
);