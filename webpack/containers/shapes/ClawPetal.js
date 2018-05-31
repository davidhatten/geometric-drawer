import React, { Component } from 'react';
import SvgPath from 'path-svg/svg-path';
import { connect } from "react-redux";
import {buildPetals, getControlPoints, getPetalTipPoints} from "../../petalUtil";

class ClawPetal extends Component {
    constructor(props) {
        super(props);
        this.firstPetalDrawn = false;
    }
    drawPetal = (innerPoint, outerPoint, controlPoint, returnInnerPoint, returnOuterPoint, returnControlPoint) => {
        // This goofy array spreading is because of the rotate library
        // at least it's confined to here
        let path = null;
        if (this.firstPetalDrawn) {
            path = SvgPath().line(...innerPoint[0]);

        } else {
            path = SvgPath().to(...innerPoint[0]);
            this.firstPetalDrawn = true;
        }

        path.bezier2(...controlPoint[0], ...outerPoint[0])
            .line(...returnOuterPoint[0]).bezier2(...returnControlPoint[0], ...returnInnerPoint[0]);

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
        const paths = buildPetals(this.drawPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);

        return (
            <g>
                <path d={paths.join(` `)} {...this.props.styleProps[this.props.style]} />
            </g>
        );

    }
}


const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(ClawPetal);