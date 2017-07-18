function torusUpdatePreview() {

}

function torusPreview() {

}

function torusDraw(canvas, event) {
    const xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    const radiusOffset = parseFloat($(`#torusRadiusOffset`).val());
    const rotation = Math.abs(parseFloat($(`#torusRotations`).val()));
    const skipFactor = Math.abs(parseInt($(`#torusSkipFactor`).val()));
    const radius = parseInt($(`#torusRadius`).val());

    setLineWidth();

    const usedCenters = drawTorus(canvas, xyCoords.x, xyCoords.y, radius, radiusOffset, rotation, skipFactor);

    history.addHistoryRow(`Torus-${Date.now()}`,
        usedCenters,
        {
            circleRadiusId: radius,
        });
}

function drawTorus(canvas, x, y, radius, radiusOffset, rotation, skipFactor) {
    const usedCenters = [];
    let angle = rotation;
    let skipCounter = 0;

    while (angle <= 360) {
        if (skipFactor != 0 && skipCounter == skipFactor) {
            skipCounter = 0;
        } else {
            const circlePoint = getPointOnCircle(x, y, radius, radiusOffset, angle);
            usedCenters.push(drawCircle(canvas, radius, circlePoint.x, circlePoint.y));
            skipCounter++;
        }

        angle += rotation;
    }

    return usedCenters;
}
