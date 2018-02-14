import React, { Component } from 'react';
import twirl from "twirl";
import SvgPath from 'path-svg/svg-path';
import { connect } from "react-redux";
import { getControlPoints, getPetalTipPoints } from "../../petalUtil";

class CurveyPetal extends Component {
    constructor(props) {
        super(props);
    }
    drawHalfPetal = (innerPoint, outerPoint, innerControlPoint, outerControlPoint) => {
        // This goofy array spreading is because of the rotate library
        // at least it's confined to here
        const path = SvgPath().to(...innerPoint[0])
            .bezier3(...innerControlPoint[0], ...outerControlPoint[0], ...outerPoint[0]);

        return path.str();
    }
    render() {
        const { axes, innerRadius, outerRadius, x, y, innerXControl, innerYControl, outerXControl, outerYControl, innerGap, outerGap, rotation } = this.props;
        // Some of these don't make sense yet.
        // Most of this will be user input
        let angle = rotation;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const paths = [];
        const centerPoint = [x, y];
        /*
        This is roundabout enough to be worth explaining.
        The overall algorithm here is to calculate a petal at the 0 angle line,
        and then rotate a copy of all the points to the proper angle until you have enough petals.

        This proved MUCH simpler than trying to make this calculation at every angle.
        I have made NO attempts to determine if this is more efficient than the alternatives
        I do not intend to consider those alternatives until I see a performance problem
         */

        // Get a point at the 0 degrees line which I'm defining as vertical, the y axis
        // HTML canvas is defined with 0, 0 at the top-left corner
        // and positive direction is down and to the right

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } = getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { leftPoint: innerLeftControlPoint, rightPoint: innerRightControlPoint } = getControlPoints(innerLeftPoint, innerRightPoint, innerXControl, innerYControl);
        const { leftPoint: outerLeftControlPoint, rightPoint: outerRightControlPoint } = getControlPoints(outerLeftPoint, outerRightPoint, outerXControl, outerYControl);

        while (angle < maxAngle) {
            paths.push(this.drawHalfPetal(
                twirl.rotateZoom(angle, centerPoint, 1, [Object.values(innerLeftPoint)]),
                twirl.rotateZoom(angle, centerPoint, 1, [Object.values(outerLeftPoint)]),
                twirl.rotateZoom(angle, centerPoint, 1, [Object.values(innerLeftControlPoint)]),
                twirl.rotateZoom(angle, centerPoint, 1, [Object.values(outerLeftControlPoint)]),
            ));

            paths.push(this.drawHalfPetal(
                twirl.rotateZoom(angle, centerPoint, 1, [Object.values(innerRightPoint)]),
                twirl.rotateZoom(angle, centerPoint, 1, [Object.values(outerRightPoint)]),
                twirl.rotateZoom(angle, centerPoint, 1, [Object.values(innerRightControlPoint)]),
                twirl.rotateZoom(angle, centerPoint, 1, [Object.values(outerRightControlPoint)]),
            ));

            angle += angleIncrement;
        }

        const drawnResults = paths.map((result, index) =>
            <path key={index} d={result} {...this.props.styleProps[this.props.style]} />
        );
        return (
            <g>
                {drawnResults}
            </g>
        );
    }
}

const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(CurveyPetal);

