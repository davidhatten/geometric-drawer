import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import 'antd/dist/antd.css';
import './style.less';

const wrapApp = AppComponent =>
    <Provider>
        <AppComponent />
    </Provider>;

render(wrapApp(App), document.getElementById(`root`));
