import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        console.log(`Square - constructor`, props);
    }
    render() {
        const { x, y, length } = this.props;
        return <rect x={x - length/2} y={y - length/2} width={length} height={length} {...this.props.style}/>;
    }
}

export default Square;
