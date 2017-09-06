import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Container text>
                    <Header as='h2'>Select a style and click the canvas to draw!</Header>
                </Container>
            );
    }
}

export default Title;
