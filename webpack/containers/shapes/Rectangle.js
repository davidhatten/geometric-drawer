import React, { Component } from 'react';
import { connect } from "react-redux";

class Rectangle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { x, y, width, height, rotation } = this.props;
        // Rect wants to draw the square with the top-left corner positioned on the cursor
        // I want to draw the square with the center positioned on the cursor
        // hence the length math
        return <rect transform={`rotate(${rotation} ${x} ${y})`} x={x - width/2} y={y - height/2} width={width} height={height} style={this.props.styleProps[this.props.style]}/>;
    }
}

const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(Rectangle);
