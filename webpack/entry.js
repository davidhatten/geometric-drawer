import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import 'antd/dist/antd.css';
import './style.less';

import consoleWrites from './reducer/consoleWrites';
import drinkBeer from './reducer/drinkBeer';
import selectShape from  './reducer/selectShape';
import shapeConfig from './reducer/shapeConfig';
import drawShape from './reducer/drawShape';


let reducers = combineReducers({ 
    consoleWrites, 
    drinkBeer, 
    selectShape, 
    shapeConfig,
    drawShape,
});

let store = createStore(reducers, applyMiddleware(thunk));

const wrapApp = AppComponent =>
    <Provider store={store}>
        <AppComponent />
    </Provider>;

render(wrapApp(App), document.getElementById(`root`));
