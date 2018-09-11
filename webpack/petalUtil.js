import twirl from "twirl";
import SvgPath from "path-svg/svg-path";

export const getPetalTipPoints = (x, y, innerRadius, outerRadius, innerGap, outerGap) => {
    /*
    Get a point at the 0 degrees line which I'm defining as vertical, the y axis
    HTML canvas is defined with 0, 0 at the top-left corner
    and positive direction is down and to the right
     */
    const innerPoint = { x: x, y: y - innerRadius };
    const outerPoint = { x: x, y: y - outerRadius };

    const innerLeftPoint = { x: innerPoint.x - innerGap, y: innerPoint.y };
    const innerRightPoint = { x: innerPoint.x + innerGap, y: innerPoint.y };
    const outerLeftPoint = { x: outerPoint.x - outerGap, y: outerPoint.y };
    const outerRightPoint = { x: outerPoint.x + outerGap, y: outerPoint.y };

    return { innerLeftPoint: innerLeftPoint, innerRightPoint: innerRightPoint, outerLeftPoint: outerLeftPoint, outerRightPoint: outerRightPoint };
};

export const getMirroredControlPoints = (leftPoint, rightPoint, xControlPoint, yControlPoint) => {
    return getIndependentControlPoints(leftPoint, rightPoint, xControlPoint, xControlPoint, yControlPoint, yControlPoint);
};

export const getIndependentControlPoints = (leftPoint, rightPoint, xLeftControlPoint, xRightControlPoint, yLeftControlPoint, yRightControlPoint) => {
    const leftControlPoint = { x: leftPoint.x - xLeftControlPoint, y: leftPoint.y - yLeftControlPoint };
    const rightControlPoint = { x: rightPoint.x + xRightControlPoint, y: rightPoint.y - yRightControlPoint };

    return { leftPoint: leftControlPoint, rightPoint: rightControlPoint };
};

export const buildPetals = (drawPetal, startAngle, angleIncrement, maxAngle, centerPoint, leftPoints, rightPoints) => {
    /*
    This is roundabout enough to be worth explaining.
    The overall algorithm here is to calculate a petal at the 0 angle line,
    and then rotate a copy of all the points to the proper angle until you have enough petals.

    This proved MUCH simpler than trying to make this calculation at every angle.
    I have made NO attempts to determine if this is more efficient than the alternatives
    I do not intend to consider those alternatives until I see a performance problem
     */

    let paths = [];
    while (startAngle < maxAngle) {
        paths.push(calculatePetalPoints(drawPetal, leftPoints, startAngle, centerPoint, rightPoints));

        startAngle += angleIncrement;
    }

    return paths;
};

export const drawRoundedPetal = (startInnerPoint, startOuterPoint, startControlPoint,
    returnInnerPoint, returnOuterPoint, returnControlPoint) => {
    // This goofy array spreading is because of the rotate library
    const path = SvgPath()
        .to(...startInnerPoint[0])
        .bezier2(...startControlPoint[0], ...startOuterPoint[0])
        .line(...returnOuterPoint[0])
        .bezier2(...returnControlPoint[0], ...returnInnerPoint[0])
        .close();

    return path.str();
};

export const drawCurveyPetal = (startInnerPoint, startOuterPoint, startInnerControlPoint, startOuterControlPoint,
    returnInnerPoint, returnOuterPoint, returnInnerControlPoint, returnOuterControlPoint) => {
    const path = SvgPath()
        .to(...startInnerPoint[0])
        .bezier3(...startInnerControlPoint[0], ...startOuterControlPoint[0], ...startOuterPoint[0])
        .line(...returnOuterPoint[0])
        .bezier3(...returnOuterControlPoint[0], ...returnInnerControlPoint[0], ...returnInnerPoint[0])
        .close();

    return path.str();
};

const calculatePetalPoints = (drawPetal, points, angle, centerPoint, rightPoints) => {
    const pointValues = points.map(point => [Object.values(point)]);
    const twirls = pointValues.map(values => twirl.rotateZoom(angle, centerPoint, 1, values));

    const returnPointValues = rightPoints.map(point => [Object.values(point)]);
    const returnTwirls = returnPointValues.map(values => twirl.rotateZoom(angle, centerPoint, 1, values));
    return drawPetal(...twirls, ...returnTwirls);
};