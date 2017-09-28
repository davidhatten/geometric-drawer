import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import 'antd/dist/antd.css';
import './style.less';

import consoleWrites from './reducers/consoleWrites';
import drinkBeer from './reducers/drinkBeer';
import selectShape from './reducers/selectShape';
import shapeConfig from './reducers/shapeConfig';
import drawShape from './reducers/drawShape';
import changeGeneralConfig from './reducers/changeGeneralConfig';


let reducers = combineReducers({ 
    consoleWrites, 
    drinkBeer, 
    selectShape, 
    shapeConfig,
    drawShape,
    generalConfig: changeGeneralConfig,
});

let store = createStore(reducers, applyMiddleware(thunk));

const wrapApp = AppComponent =>
    <Provider store={store}>
        <AppComponent />
    </Provider>;

render(wrapApp(App), document.getElementById(`root`));
