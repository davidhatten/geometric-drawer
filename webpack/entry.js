import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from './components/Title';
import Studio from './components/Studio';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.css';
import './style.less';

class App extends Component {
    render() {
        return (
            <LocaleProvider locale={enUS}>
                <div>
                    <Title />
                    <Studio />
                </div>
            </LocaleProvider>
        );
    }
}

render(<App />, document.getElementById(`root`));
