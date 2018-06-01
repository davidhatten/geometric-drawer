import React, { Component } from 'react';
import {buildPetals, getControlPoints, getPetalTipPoints} from "../../petalUtil";

export default class AbstractPetal extends Component {
    constructor(props) {
        super(props);
        this.firstPetalDrawn = false;

        if (new.target === AbstractPetal) {
            throw new TypeError(`Cannot create an abstract petal directly.`);
        }

        if (this.drawPetal === undefined) {
            throw new TypeError(`Must implement drawPetal function that accepts points to translate into strokes`);
        }
    }

    singleControlPointForBothPetalArmsAlgorithm() {
        const { rotation: angle, axes, innerRadius, outerRadius, x, y, innerXControl, innerYControl, innerGap, outerGap } = this.props;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const centerPoint = [x, y];

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } = getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { rightPoint: controlPoint } = getControlPoints(innerLeftPoint, innerRightPoint, innerXControl, innerYControl);

        const leftPoints = [innerLeftPoint, outerLeftPoint, controlPoint];
        const rightPoints = [innerRightPoint, outerRightPoint, controlPoint];

        return buildPetals(this.drawPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);
    }

    singleControlPointForEachPetalArmAlgorithm() {
        const { rotation: angle, axes, innerRadius, outerRadius, x, y, innerXControl, innerYControl, innerGap, outerGap } = this.props;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const centerPoint = [x, y];

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } = getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { leftPoint: leftControlPoint, rightPoint: rightControlPoint } = getControlPoints(innerLeftPoint, innerRightPoint, innerXControl, innerYControl);

        const leftPoints = [innerLeftPoint, outerLeftPoint, leftControlPoint];
        const rightPoints = [innerRightPoint, outerRightPoint, rightControlPoint];

        return buildPetals(this.drawPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);
    }

    doubleControlPointsForEachPetalArmAlgorithm() {
        const { rotation: angle, axes, innerRadius, outerRadius, x, y, innerXControl, innerYControl, outerXControl, outerYControl, innerGap, outerGap } = this.props;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const centerPoint = [x, y];

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } = getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { leftPoint: innerLeftControlPoint, rightPoint: innerRightControlPoint } = getControlPoints(innerLeftPoint, innerRightPoint, innerXControl, innerYControl);
        const { leftPoint: outerLeftControlPoint, rightPoint: outerRightControlPoint } = getControlPoints(outerLeftPoint, outerRightPoint, outerXControl, outerYControl);

        const leftPoints = [innerLeftPoint, outerLeftPoint, innerLeftControlPoint, outerLeftControlPoint];
        const rightPoints = [innerRightPoint, outerRightPoint, innerRightControlPoint, outerRightControlPoint];

        return buildPetals(this.drawPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);
    }
}
