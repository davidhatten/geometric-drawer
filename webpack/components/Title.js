import React, { Component } from 'react';
import { Container, Header, Divider } from 'semantic-ui-react'

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            margin: `10px 0px`,
        };
        return (
            <div>
                <Container style={style} textAlign="center">
                    <Header as="h2">Select a style and click the canvas!</Header>
                </Container>
            </div>
            );
    }
}

export default Title;
