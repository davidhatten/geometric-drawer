import React, { Component } from 'react';
import Studio from '../containers/Studio';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';


class App extends Component {
    render() {
        return (
            <div>
                <Studio />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
