import React, { Component } from 'react';

class RoundedPetal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const numOfAxes = this.props.axes;
        let angle = 0;
        let result = [];
        return (
            <circle r="200" cx={this.props.x} cy={this.props.y} {...this.props.style} />
        );

    }
}

export default RoundedPetal;