import React, { Component } from 'react';

class Circle extends Component {
    constructor(props) {
        super(props);
        console.log("Circle - constructor", props);
    }
    render() {
        return <circle {...this.props.locationData} {...this.props.style}/>;
    }
}

export default Circle;