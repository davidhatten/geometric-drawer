import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from './components/Title';

class App extends Component {
    render() {
        return (
                <Title />
            );
    }
}

render(<App />, document.getElementById('root'))
