import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import 'antd/dist/antd.css';
import './style.less';

import selectShape from './reducers/selectShape';
import changeShapeConfig from './reducers/changeShapeConfig';
import changeShapeHistory from './reducers/changeShapeHistory';
import changeGeneralConfig from './reducers/changeGeneralConfig';
import { CIRCLE_CONFIG, FOL_CONFIG } from "./shapeConstants";
import changeFOLConfig from "./reducers/changeFOLConfig";
import changeCircleConfig from "./reducers/changeCircleConfig";


let reducers = combineReducers({
    selectShape,
    [FOL_CONFIG]: changeFOLConfig,
    [CIRCLE_CONFIG]: changeCircleConfig,
    shapeConfig: changeShapeConfig,
    shapeHistory: changeShapeHistory,
    generalConfig: changeGeneralConfig,
});

let store = createStore(reducers, applyMiddleware(thunk));

const wrapApp = AppComponent =>
    <Provider store={store}>
        <AppComponent />
    </Provider>;

render(wrapApp(App), document.getElementById(`root`));
