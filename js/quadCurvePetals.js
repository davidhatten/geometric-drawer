function quadCurvePreview() {

}

function quadCurveUpdatePreview() {

}

function quadCurveDraw(canvas, event) {
    const xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    const numOfAxes = $(`#quadCurveAxes`).find(`:selected`).val();
    const axisOffset = $(`#quadCurveAxisOffset`).val();
    const innerRadius = parseInt($(`#quadCurveInnerRadius`).val());
    const outerRadius = parseInt($(`#quadCurveOuterRadius`).val());
    const xControlPoint = parseInt($(`#quadCurveXControl`).val());
    const yControlPoint = parseInt($(`#quadCurveYControl`).val());

    setLineWidth();
    const usedCenters = drawQuadLines(canvas, xyCoords, numOfAxes, axisOffset, innerRadius, outerRadius, xControlPoint, yControlPoint);

    history.addHistoryRow(`Quad Curve Petals-${Date.now()}`,
        usedCenters,
        {
            circleRadiusId: innerRadius,
        });
}

function drawQuadLines(canvas, clickCoords, numOfAxes, axisOffset, innerRadius, outerRadius, xControlPoint, yControlPoint) {
    let angle = axisOffset ? parseInt(axisOffset) : 0;
    let result = [];
    const angleIncrement = 360/parseInt(numOfAxes);
    const maxAngle = 360 + angle;
    const x = clickCoords.x;
    const y = clickCoords.y;

    // First get all the points on the 0 angle line (x slope = 0)
    const innerEdgePoint = getPointOnCircle(x, y, innerRadius, 0, 0);
    const outerEdgePoint = getPointOnCircle(x, y, outerRadius, 0, 0);

    const leftControlPoint = {x: innerEdgePoint.x + yControlPoint, y: innerEdgePoint.y - xControlPoint};
    const rightControlPoint = {x: innerEdgePoint.x + yControlPoint, y: innerEdgePoint.y + xControlPoint};

    while (angle < maxAngle) {
        // Now rotate all the points to the correct spot and draw it
        result = result.concat(drawSinglePetal(canvas,
            rotateAroundPoint(x, y, innerEdgePoint, angle),
            rotateAroundPoint(x, y, leftControlPoint, angle),
            rotateAroundPoint(x, y, rightControlPoint, angle),
            rotateAroundPoint(x, y, outerEdgePoint, angle)));

        angle += angleIncrement;
    }

    return result;
}


function drawSinglePetal(canvas, innerEdgePoint, controlPointLeft, controlPointRight, outerEdgePoint) {
    // take the data and shift it by angle degrees
    const result = [];
    result.push(drawQuadCurve(canvas, innerEdgePoint.x, innerEdgePoint.y, controlPointLeft.x, controlPointLeft.y, outerEdgePoint.x, outerEdgePoint.y));
    result.push(drawQuadCurve(canvas, innerEdgePoint.x, innerEdgePoint.y, controlPointRight.x, controlPointRight.y, outerEdgePoint.x, outerEdgePoint.y));
    return result;
}

function rotateAroundPoint(xCenter, yCenter, rotatePoint, angle) {
    const sin = sinDeg(angle);
    const cos = cosDeg(angle);

    const baseX = rotatePoint.x - xCenter;
    const baseY = rotatePoint.y - yCenter;

    const result = {x: (baseX * cos) - (baseY * sin), y: (baseX * sin) + (baseY * cos)};
    result.x += xCenter;
    result.y += yCenter;

    return result;
}

function sinDeg(angleInDegrees) {
    return Math.sin(angleInDegrees * (Math.PI / 180));
}

function cosDeg(angleInDegrees) {
    return Math.cos(angleInDegrees * (Math.PI / 180));
}
