import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from './components/Title';
import Studio from './components/Studio';

class App extends Component {
    render() {
        const style = {
            borderBox: 'box-sizing',
        }
        return (
                <div style={style}>
                    <Title />
                    <Studio />
                </div>
            );
    }
}

render(<App />, document.getElementById('root'))
