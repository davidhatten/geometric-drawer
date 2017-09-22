import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import consoleWrites from './reducer/consoleWrites';
import drinkBeer from './reducer/drinkBeer';

import App from './components/App';
import 'antd/dist/antd.css';
import './style.less';

let store = createStore(combineReducers( { consoleWrites, drinkBeer } ));

const wrapApp = AppComponent =>
    <Provider store={store}>
        <AppComponent />
    </Provider>;

render(wrapApp(App), document.getElementById(`root`));
