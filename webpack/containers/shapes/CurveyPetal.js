import React, { Component } from 'react';
import SvgPath from 'path-svg/svg-path';
import { connect } from "react-redux";
import { buildPetals, getControlPoints, getPetalTipPoints } from "../../petalUtil";

class CurveyPetal extends Component {
    constructor(props) {
        super(props);
    }
    drawHalfPetal = (innerPoint, outerPoint, innerControlPoint, outerControlPoint) => {
        // This goofy array spreading is because of the rotate library
        // at least it's confined to here
        // except it isn't any sufficiently complex petal will use this
        // maybe wrap this in a call to petalUtil?
        const path = SvgPath().to(...innerPoint[0])
            .bezier3(...innerControlPoint[0], ...outerControlPoint[0], ...outerPoint[0]);

        return path.str();
    }
    render() {
        const { rotation: angle, axes, innerRadius, outerRadius, x, y, innerXControl, innerYControl, outerXControl, outerYControl, innerGap, outerGap } = this.props;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const centerPoint = [x, y];

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } = getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { leftPoint: innerLeftControlPoint, rightPoint: innerRightControlPoint } = getControlPoints(innerLeftPoint, innerRightPoint, innerXControl, innerYControl);
        const { leftPoint: outerLeftControlPoint, rightPoint: outerRightControlPoint } = getControlPoints(outerLeftPoint, outerRightPoint, outerXControl, outerYControl);

        const leftPoints = [innerLeftPoint, outerLeftPoint, innerLeftControlPoint, outerLeftControlPoint];
        const rightPoints = [innerRightPoint, outerRightPoint, innerRightControlPoint, outerRightControlPoint];

        const paths = buildPetals(this.drawHalfPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);

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

