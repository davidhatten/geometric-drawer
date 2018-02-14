export const getPetalTipPoints = (x, y, innerRadius, outerRadius, innerGap, outerGap) => {
    const innerPoint = { x: x, y: y - innerRadius };
    const outerPoint = { x: x, y: y - outerRadius };

    const innerLeftPoint = { x: innerPoint.x - innerGap, y: innerPoint.y };
    const innerRightPoint = { x: innerPoint.x + innerGap, y: innerPoint.y };
    const outerLeftPoint = { x: outerPoint.x - outerGap, y: outerPoint.y };
    const outerRightPoint = { x: outerPoint.x + outerGap, y: outerPoint.y };

    return { innerLeftPoint: innerLeftPoint, innerRightPoint: innerRightPoint, outerLeftPoint: outerLeftPoint, outerRightPoint: outerRightPoint };
};

export const getControlPoints = (leftPoint, rightPoint, xControlPoint, yControlPoint) => {
    const leftControlPoint = { x: leftPoint.x - xControlPoint, y: leftPoint.y - yControlPoint };
    const rightControlPoint = { x: rightPoint.x + xControlPoint, y: rightPoint.y - yControlPoint };

    return { leftPoint: leftControlPoint, rightPoint: rightControlPoint };
};