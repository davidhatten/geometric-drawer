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


let reducers = combineReducers({
    selectShape, 
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
