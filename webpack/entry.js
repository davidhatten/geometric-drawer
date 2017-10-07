import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import 'antd/dist/antd.css';
import './style.less';

import selectShape from './reducers/selectShape';
import changeShapeHistory from './reducers/changeShapeHistory';
import changeGeneralConfig from './reducers/changeGeneralConfig';
import { CIRCLE_CONFIG, FOL_CONFIG, ROUNDED_PETAL_CONFIG, SQUARE_CONFIG } from "./shapeConstants";
import changeFOLConfig from "./reducers/changeFOLConfig";
import changeCircleConfig from "./reducers/changeCircleConfig";
import changeSquareConfig from "./reducers/changeSquareConfig";
import changeShapeProp from "./reducers/changeShapeProp";
import { shapeHighlighting } from "./middleware/shapeHighlighting";
import changeEditPopover from "./reducers/changeEditPopover";
import changeRoundedPetalConfig from "./reducers/changeRoundedPetalConfig";
import changeShapeStyle from "./reducers/changeShapeStyle";


let reducers = combineReducers({
    selectShape,
    [FOL_CONFIG]: changeFOLConfig,
    [CIRCLE_CONFIG]: changeCircleConfig,
    [SQUARE_CONFIG]: changeSquareConfig,
    [ROUNDED_PETAL_CONFIG]: changeRoundedPetalConfig,
    shapeStyle: changeShapeStyle,
    shapeProps: changeShapeProp,
    shapeHistory: changeShapeHistory,
    generalConfig: changeGeneralConfig,
    currentlyEditing: changeEditPopover,
});

let store = createStore(reducers, applyMiddleware(thunk, shapeHighlighting));

const wrapApp = AppComponent =>
    <Provider store={store}>
        <AppComponent />
    </Provider>;

render(wrapApp(App), document.getElementById(`root`));
