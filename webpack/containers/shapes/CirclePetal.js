import React, { Component } from 'react';
import circlePoint from 'point-on-circle';
import { connect } from "react-redux";
import Circle from "./Circle";

class CirclePetal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { x, y, ringRadius, petalRadius, rotation, axes, style } = this.props;
        let angle = rotation;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const paths = [];

        // See RoundedPetal.js for explanation of this odd math
        // I could convert this to use the new petal handling, but it would actually make this more complex
        const startingPoint = { x: x, y: y - ringRadius };

        while (angle < maxAngle) {
            const currentPoint = circlePoint(startingPoint, { x: x, y: y }, angle*(Math.PI/180));
            paths.push(<Circle {...currentPoint} radius={petalRadius} style={style} key={style + angle}/>);

            angle += angleIncrement;
        }

        return (
            <g>
                {paths}
            </g>
        );
    }
}


const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(CirclePetal);
