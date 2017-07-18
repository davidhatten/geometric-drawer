function metatronsCubePreview() {

}

function metatronsCubeUpdatePreview() {

}

function metatronsCubeDraw(canvas, event) {
    const xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    const radiusOffset = parseInt($(`#metatronsCubeRadiusOffset`).val());
    const radius = parseInt($(`#metatronsCubeRadius`).val());

    setLineWidth();

    const drawnLines = drawMetatronCube(canvas, radius, radiusOffset, xyCoords.x, xyCoords.y);
    // That tiny bit of global state is growing ugly, might want to handle soon
    history.addHistoryRow(`Metatron Cube-${Date.now()}`,
        drawnLines,
        {
            circleRadiusId: radius,
        });
}

function drawMetatronCube(canvas, radius, radiusOffset, x, y) {
    var drawnLines = [];
    drawnLines.push(drawCircle(canvas, radius, x, y));

    var innerCircles = drawCircleLayer(canvas, x, y, radius, radiusOffset, 1);
    drawnLines = drawnLines.concat(innerCircles);
    drawnLines = drawnLines.concat(drawPolygonLayer(canvas, innerCircles));

    var outerCircles = drawCircleLayer(canvas, x, y, radius, radiusOffset, 2);
    drawnLines = drawnLines.concat(outerCircles);
    drawnLines = drawnLines.concat(drawPolygonLayer(canvas, outerCircles));

    return drawnLines;
}

function drawCircleLayer(canvas, centerX, centerY, radius, radiusOffset, layer) {
    var createdCircles = [];
    var metatronAngles = [30, 90, 150, 210, 270, 330];

    for (let i = 0; i < 6; i++) {
        var sqrX = centerX + (2*layer*(radius+radiusOffset)) * Math.cos((Math.PI/180) * metatronAngles[i]);
        var sqrY = centerY + (2*layer*(radius+radiusOffset)) * Math.sin((Math.PI/180) * metatronAngles[i]);
        var circle = drawCircle(canvas, radius, sqrX, sqrY);
        createdCircles.push(circle);
    }

    return createdCircles;
}

function drawPolygonLayer(canvas, circleLayer) {
    const drawnLines = [];
    for (let i = 0; i < circleLayer.length; i++) {
        for (let j = i; j < circleLayer.length; j++) {
            var start = circleLayer[i];
            var end = circleLayer[j];
            drawnLines.push(drawLine(canvas, start.x, start.y, end.x, end.y));
        }
    }

    return drawnLines;
}
