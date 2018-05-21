import React, { Component } from 'react';
import Title from './Title';
import Studio from '../containers/Studio';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

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

export default DragDropContext(HTML5Backend)(App);
