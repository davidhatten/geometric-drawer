import React, { Component } from 'react';
import Title from './Title';
import Studio from '../containers/Studio';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

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

export default App;
