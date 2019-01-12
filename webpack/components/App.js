import React, { Component } from 'react';
import Studio from '../containers/Studio';
import LocaleProvider from 'antd/lib/locale-provider';
import 'antd/lib/locale-provider/style';
import enUS from 'antd/lib/locale-provider/en_US';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import styles from './App.scss';


class App extends Component {
    render() {
        return (
            <LocaleProvider locale={enUS}>
                <div>
                    <Studio />
                </div>
            </LocaleProvider>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
