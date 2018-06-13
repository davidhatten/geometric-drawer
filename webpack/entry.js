import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';

import selectShape from './reducers/selectShape';
import changeShapeHistory from './reducers/changeShapeHistory';
import changeGeneralConfig from './reducers/changeGeneralConfig';
import {
    CIRCLE_CONFIG, CIRCLE_PETAL_CONFIG, CLAW_PETAL_CONFIG, CURVEY_PETAL_CONFIG, FOL_CONFIG, POINTED_PETAL_CONFIG,
    PRISM_PETAL_CONFIG, RECTANGLE_CONFIG,
    ROUNDED_PETAL_CONFIG,
    SQUARE_CONFIG,
} from "./shapeConstants";
import changeFOLConfig from "./reducers/changeFOLConfig";
import changeCircleConfig from "./reducers/changeCircleConfig";
import changeSquareConfig from "./reducers/changeSquareConfig";
import changeShapeProp from "./reducers/changeShapeProp";
import { shapeHighlighting } from "./middleware/shapeHighlighting";
import changeEditPopover from "./reducers/changeEditPopover";
import changeRoundedPetalConfig from "./reducers/changeRoundedPetalConfig";
import changeShapeStyle from "./reducers/changeShapeStyle";
import changeCirclePetalConfig from "./reducers/changeCirclePetalConfig";
import changeCurveyPetalConfig from "./reducers/changeCurveyPetalConfig";
import changePointedPetalConfig from "./reducers/changePointedPetalConfig";
import changeClawPetalConfig from "./reducers/changeClawPetalConfig";
import changePrismPetalConfig from "./reducers/changePrismPetalConfig";
import changeRectangleConfig from "./reducers/changeRectangleConfig";


let reducers = combineReducers({
    selectShape,
    [FOL_CONFIG]: changeFOLConfig,
    [CIRCLE_CONFIG]: changeCircleConfig,
    [SQUARE_CONFIG]: changeSquareConfig,
    [ROUNDED_PETAL_CONFIG]: changeRoundedPetalConfig,
    [CIRCLE_PETAL_CONFIG]: changeCirclePetalConfig,
    [CURVEY_PETAL_CONFIG]: changeCurveyPetalConfig,
    [POINTED_PETAL_CONFIG]: changePointedPetalConfig,
    [CLAW_PETAL_CONFIG]: changeClawPetalConfig,
    [PRISM_PETAL_CONFIG]: changePrismPetalConfig,
    [RECTANGLE_CONFIG]: changeRectangleConfig,
    shapeStyle: changeShapeStyle,
    shapeProps: changeShapeProp,
    shapeHistory: changeShapeHistory,
    generalConfig: changeGeneralConfig,
    currentlyEditing: changeEditPopover,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, shapeHighlighting)));

const wrapApp = AppComponent =>
    <Provider store={store}>
        <AppComponent />
    </Provider>;

render(wrapApp(App), document.getElementById(`root`));
