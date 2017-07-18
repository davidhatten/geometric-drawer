function dotsUpdatePreview() {

}

function dotsPreview() {

}

function dotsDraw(canvas, event) {
    const xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    const numOfAxes = $(`#dotsAxes`).find(`:selected`).val();
    const axisOffset = $(`#dotsAxisOffset`).val();
    const baseRadius = parseInt($(`#dotsBaseRadius`).val());
    const dotRadius = parseInt($(`#dotsRadius`).val());

    setLineWidth();

    const usedCenters = drawDotLines(canvas, xyCoords, baseRadius, dotRadius, numOfAxes, axisOffset);
    history.addHistoryRow(`Dots-${Date.now()}`,
        usedCenters,
        {
            circleRadiusId: baseRadius,
        });
}

function drawDotLines(canvas, clickCoords, radius, dotRadius, numOfAxes, axisOffset) {
    const drawnDots = [];
    let angle = axisOffset ? parseInt(axisOffset) : 0;
    const angleIncrement = 360/parseInt(numOfAxes);
    const maxAngle = 360 + angle;

    while (angle < maxAngle) {
        const drawCenter = getPointOnCircle(clickCoords.x, clickCoords.y, radius, 0, angle);

        drawnDots.push(drawCircle(canvas, dotRadius, drawCenter.x, drawCenter.y));

        angle += angleIncrement;
    }

    return drawnDots;
}
