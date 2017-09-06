import React, { Component } from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react'

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header textAlign="center" as="h2">Select a style and click the canvas!</Header>

            );
    }
}

export default Title;
