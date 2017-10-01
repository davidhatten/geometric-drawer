import React, { Component } from 'react';

class Circle extends Component {
    constructor(props) {
        super(props);
        console.log(`Circle - constructor`, props);
    }
    render() {
        return <circle cx={this.props.x} cy={this.props.y} r={this.props.radius.value} {...this.props.style}/>;
    }
}

export default Circle;
