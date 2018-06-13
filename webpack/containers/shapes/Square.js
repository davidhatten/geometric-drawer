import React, { Component } from 'react';
import { connect } from "react-redux";

class Square extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { x, y, length, rotation } = this.props;
        // Rect wants to draw the square with the top-left corner positioned on the cursor
        // I want to draw the square with the center positioned on the cursor
        // hence the length math
        return <rect transform={`rotate(${rotation} ${x} ${y})`} x={x - length/2} y={y - length/2} width={length} height={length} style={this.props.styleProps[this.props.style]}/>;
    }
}

const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(Square);
