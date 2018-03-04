import React, { Component } from 'react';
import SvgPath from 'path-svg/svg-path';
import { connect } from "react-redux";
import {buildPetals, getControlPoints, getPetalTipPoints} from "../../petalUtil";

class ClawPetal extends Component {
    constructor(props) {
        super(props);
    }
    drawHalfPetal = (innerPoint, outerPoint, controlPoint) => {
        // This goofy array spreading is because of the rotate library
        // at least it's confined to here
        const path = SvgPath().to(...innerPoint[0])
            .bezier2(...controlPoint[0], ...outerPoint[0]);

        return path.str();
    }
    render() {
        const { rotation: angle, axes, innerRadius, outerRadius, x, y, innerXControl, innerYControl, innerGap, outerGap } = this.props;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const centerPoint = [x, y];

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } = getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { rightPoint: controlPoint } = getControlPoints(innerLeftPoint, innerRightPoint, innerXControl, innerYControl);

        const leftPoints = [innerLeftPoint, outerLeftPoint, controlPoint];
        const rightPoints = [innerRightPoint, outerRightPoint, controlPoint];

        const paths = buildPetals(this.drawHalfPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);

        const drawnResults = paths.map((result, index) =>
            <path key={index} d={result} {...this.props.styleProps[this.props.style]} />
        );

        return (
            <g>
                { drawnResults }
            </g>
        );

    }
}


const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(ClawPetal);