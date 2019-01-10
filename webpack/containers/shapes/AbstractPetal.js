import { Component } from 'react';
import { buildPetals, getIndependentControlPoints, getMirroredControlPoints, getPetalTipPoints } from "../../petalUtil";

export default class AbstractPetal extends Component {
    constructor(props) {
        super(props);

        if (new.target === AbstractPetal) {
            throw new TypeError(`Cannot create an abstract petal directly.`);
        }

        if (this.drawPetal === undefined) {
            throw new TypeError(`Must implement drawPetal function that accepts points to translate into strokes`);
        }
    }

    singleControlPointForBothPetalArmsAlgorithm() {
        /*
        This algorithm describes math for a petal that uses a single control point for both petal arms
        This means that both petal arm paths will use a single control point
        Visually, this results in one arc of the petal dramatically bending towards the control point
        This is useful for creating closed shapes
         */
        const { rotation: angle, axes, innerRadius, outerRadius, x, y, innerXControl, innerYControl, innerGap, outerGap } = this.props;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const centerPoint = [x, y];

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } = getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { rightPoint: controlPoint } = getMirroredControlPoints(innerLeftPoint, innerRightPoint, innerXControl, innerYControl);

        const leftPoints = [innerLeftPoint, outerLeftPoint, controlPoint];
        const rightPoints = [innerRightPoint, outerRightPoint, controlPoint];

        return buildPetals(this.drawPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);
    }

    singleControlPointMirroredForEachPetalArmAlgorithm() {
        /*
        This algorithm describes math for a petal that uses a single mirrored control point for each petal arm
        So, both petal arms refer to one of two mirrored control points
        Visually this results in a set of petals where each has vertical symmetry
         */
        const { rotation: angle, axes, innerRadius, outerRadius, x, y, innerXControl, innerYControl, innerGap, outerGap } = this.props;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const centerPoint = [x, y];

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } = getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { leftPoint: leftControlPoint, rightPoint: rightControlPoint } = getMirroredControlPoints(innerLeftPoint, innerRightPoint, innerXControl, innerYControl);

        const leftPoints = [innerLeftPoint, outerLeftPoint, leftControlPoint];
        const rightPoints = [innerRightPoint, outerRightPoint, rightControlPoint];

        return buildPetals(this.drawPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);
    }

    singleControlPointIndependentForEachPetalArmAlgorithm() {
        /*
        This algorithm describes math for a petal that uses a single independent control point for each petal arm
        So, both petal arms are completely distinct and can be independently controlled
        Visually this results in a set of petals that have the potential to have zero symmetry 
         */
        const { rotation: angle, axes, innerRadius, outerRadius, x, y, innerXLeftControl, innerXRightControl,
            innerYLeftControl, innerYRightControl, innerGap, outerGap } = this.props;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const centerPoint = [x, y];

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } =
            getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { leftPoint: leftControlPoint, rightPoint: rightControlPoint } =
            getIndependentControlPoints(innerLeftPoint, innerRightPoint, innerXLeftControl, innerXRightControl, innerYLeftControl, innerYRightControl);

        const leftPoints = [innerLeftPoint, outerLeftPoint, leftControlPoint];
        const rightPoints = [innerRightPoint, outerRightPoint, rightControlPoint];

        return buildPetals(this.drawPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);
    }

    doubleControlPointsMirroredForEachPetalArmAlgorithm() {
        /*
        This algorithm describes math for a petal that uses 2 control points for each petal arm.
        Both petal arms have 2 control points, one that refers to the inner point and one that refers to the outer point
        Each pair of control points (inner/outer) is mirrored.
        So, there is only one set of controls for manipulating the control points (inner/outer x/y)
        Visually this results in a set of petals with vertical symmetry
         */
        const { rotation: angle, axes, innerRadius, outerRadius, x, y, innerXControl, innerYControl, outerXControl, outerYControl, innerGap, outerGap } = this.props;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const centerPoint = [x, y];

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } = getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { leftPoint: innerLeftControlPoint, rightPoint: innerRightControlPoint } = getMirroredControlPoints(innerLeftPoint, innerRightPoint, innerXControl, innerYControl);
        const { leftPoint: outerLeftControlPoint, rightPoint: outerRightControlPoint } = getMirroredControlPoints(outerLeftPoint, outerRightPoint, outerXControl, outerYControl);

        const leftPoints = [innerLeftPoint, outerLeftPoint, innerLeftControlPoint, outerLeftControlPoint];
        const rightPoints = [innerRightPoint, outerRightPoint, innerRightControlPoint, outerRightControlPoint];

        return buildPetals(this.drawPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);
    }

    doubleControlPointIndependentForEachPetalArmAlgorithm() {
        /*
        This algorithm describes math for a petal that uses a 2 independent control points for each petal arm
        So, both petal arms are completely distinct and all control points can be independently modified
        Visually this results in a set of petals that has the potential to have 0 symmetry
         */
        const { rotation: angle, axes, innerRadius, outerRadius, x, y, innerXLeftControl, innerXRightControl,
            innerYLeftControl, innerYRightControl, outerXLeftControl, outerXRightControl,
            outerYLeftControl, outerYRightControl, innerGap, outerGap } = this.props;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const centerPoint = [x, y];

        const { innerLeftPoint, innerRightPoint, outerLeftPoint, outerRightPoint } =
            getPetalTipPoints(x, y, innerRadius, outerRadius, innerGap, outerGap);
        const { leftPoint: innerLeftControlPoint, rightPoint: innerRightControlPoint } =
            getIndependentControlPoints(innerLeftPoint, innerRightPoint, innerXLeftControl, innerXRightControl, innerYLeftControl, innerYRightControl);
        const {leftPoint: outerLeftControlPoint, rightPoint: outerRightControlPoint } =
            getIndependentControlPoints(outerLeftPoint, outerLeftPoint, outerXLeftControl, outerXRightControl, outerYLeftControl, outerYRightControl);

        const leftPoints = [innerLeftPoint, outerLeftPoint, innerLeftControlPoint, outerLeftControlPoint];
        const rightPoints = [innerRightPoint, outerRightPoint, innerRightControlPoint, outerRightControlPoint];

        return buildPetals(this.drawPetal, angle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints);
    }
}
