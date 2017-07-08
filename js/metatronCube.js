var flowerOfLifeElementId = "includeFOL";
var drawnCenters = [];

function drawMetatronEventListener(event) {
    var canvas = this;
    var xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    var radius = document.getElementById("circleRadius").value;
    var radiusOffsetElement = document.getElementById(radiusOffsetId);
    var includeFOL = document.getElementById(flowerOfLifeElementId).checked;
    var radiusOffset = includeFOL === true ? 0 : radiusOffsetElement.value;
    drawnCenters = []

    setLineWidth();

    drawMetatronCube(canvas, xyCoords.x, xyCoords.y, parseInt(radius), parseInt(radiusOffset), Boolean(includeFOL));
    //This little trick with the drawn centers is because of the way Flower needs to have clear centers
    // That tiny bit of global state is growing ugly, might want to handle soon
    history.addHistoryRow(`Metatron Cube-${Date.now()}`,
                            drawnCenters.concat(usedCenters),
                            {
                                circleRadiusId: radius,
                            });
    clearCenters();
}

function previewMetatronEventListener(event) {
    calculateVariableRadiusOffsetPreview(event, 0, 10);
}

function validateOffsetUI() {
    var radiusOffsetElement = document.getElementById(radiusOffsetId);
    var FOLValue = document.getElementById(flowerOfLifeElementId).checked;
    if (FOLValue === true) {
        radiusOffsetElement.disabled = true;
    } else {
        radiusOffsetElement.disabled = false;
    }
}

function setMetatronOptions(element) {
    var row = createRowDiv();
    var column = createColumnDiv();
    var flowerOfLifeText = createLabel("Flower Of Life");
    var flowerOfLifeElement = document.createElement("input");
    flowerOfLifeElement.id = flowerOfLifeElementId;
    flowerOfLifeElement.type = "checkbox";
    flowerOfLifeElement.checked = false;
    flowerOfLifeElement.onclick = validateOffsetUI;
    flowerOfLifeText.for = flowerOfLifeElementId;

    column.append(flowerOfLifeElement);
    column.append(flowerOfLifeText);
    row.append(column)

    row.insertAfter(element);

    setRadiusOffsetOptions(element);
    setCircleRadiusOptions(element);
}

function drawMetatronCube(canvas, x, y, setRadius, radiusOffset, includeFOL) {
    radius = setRadius;
    var center = drawCircle(canvas, x, y);
    var degreesSpacing = 60; //spacing between the arms
    var degreesOffset = 30;
    var innerCircles = drawCircleLayer(canvas, x, y, radiusOffset, 1);
    drawPolygonLayer(canvas, innerCircles);

    var outerCircles = drawCircleLayer(canvas, x, y, radiusOffset, 2);
    drawPolygonLayer(canvas, outerCircles);
    drawnCenters = usedCenters;

    if (includeFOL === true) {
        drawFlower(canvas, x, y, setRadius, 4);
    }
}

function drawCircleLayer(canvas, centerX, centerY, radiusOffset, layer) {
    var createdCircles = [];
    var metatronAngles = [30, 90, 150, 210, 270, 330];

    for (let i = 0; i < 6; i++) {
        var sqrX = centerX + (2*layer*(radius+radiusOffset)) * Math.cos((Math.PI/180) * metatronAngles[i]);
        var sqrY = centerY + (2*layer*(radius+radiusOffset)) * Math.sin((Math.PI/180) * metatronAngles[i]);
        var circle = drawCircle(canvas, sqrX, sqrY);
        createdCircles.push(circle);
    }

    return createdCircles;
}

function drawPolygonLayer(canvas, circleLayer) {
    for (let i = 0; i < circleLayer.length; i++) {
        for (let j = i; j < circleLayer.length; j++) {
            var start = circleLayer[i];
            var end = circleLayer[j];
            drawLine(canvas, start.x, start.y, end.x, end.y);
        }
    }
}
