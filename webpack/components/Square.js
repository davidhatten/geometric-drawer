import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        console.log("Square - constructor", props);
    }
    render() {
        return <rect {...this.props}/>;
    }
}

export default Square;