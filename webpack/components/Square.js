import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        console.log(`Square - constructor`, props);
    }
    render() {
        const { x, y, length } = this.props;
        return <rect x={x - length.value/2} y={y - length.value/2} width={length.value} height={length.value} {...this.props.style}/>;
    }
}

export default Square;
