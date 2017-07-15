var rotationElementId = "degreeOfRotation";
var skipElementId = "skipFactor";
var skipGroupElementId = "skipGrouping";
var radius;

function drawTorusEventListener(event) {
    var canvas = this;
    var xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    var radiusOffset = parseFloat(document.getElementById(radiusOffsetId).value);
    var rotation = Math.abs(parseFloat(document.getElementById(rotationElementId).value));
    var skipFactor = Math.abs(parseInt(document.getElementById(skipElementId).value));
    radius = parseInt($(`#${circleRadiusId}`).val());

    setLineWidth();

    drawTorus(canvas, xyCoords.x, xyCoords.y, radius, radiusOffset, rotation, skipFactor);

    history.addHistoryRow(`Torus-${Date.now()}`,
                            usedCenters,
                            {
                                circleRadiusId: radius,
                            });
    clearCenters();
}

function previewTorusEventListener(event) {
    var radiusOffset = parseFloat(document.getElementById(radiusOffsetId).value);
    radius = parseInt($(`#${circleRadiusId}`).val());
    calculateVariableRadiusOffsetPreview(event, radius, radiusOffset, 4);
}

function setTorusOptions(element) {
    var row = createRowDiv();
    var column = createColumnDiv();
    var rotationText = createLabel("Degree of Rotation:");
    var rotationElement = document.createElement("select");

    var rotationSelect = document.createElement("select");
    rotationSelect.id = rotationElementId;
    rotationSelect.addEventListener('change', updateSkipFactors)



    column.append(rotationText);
    column.append(rotationSelect);
    row.append(column);

    row.insertAfter(element);

    var skipRow = createRowDiv();
    var skipColumn = createColumnDiv();
    var skipSelect = document.createElement("select");
    skipSelect.id = skipElementId;
    var skipText = createLabel("Skip factor:");

    skipColumn.append(skipText);
    skipColumn.append(skipSelect);
    skipRow.append(skipColumn);

    skipRow.insertAfter(element);

    repopulateSkipSelect(rotationSelect, skipSelect);

    setRadiusOffsetOptions(element);

    setCircleRadiusOptions(element);
}

function drawTorus(canvas, x, y, radius, radiusOffset, rotation, skipFactor) {
    var centerCircle = {x: x, y: y};

    var angle = rotation;
    var skipCounter = 0;

    while (angle <= 360) {
        if (skipFactor != 0 && skipCounter == skipFactor) {
            skipCounter = 0;
        } else {
            var circlePoint = getPointOnCircle(x, y, radius, radiusOffset, angle)
            drawCircle(canvas, radius, circlePoint.x, circlePoint.y);
            skipCounter++;
        }

        angle += rotation;
    }
}
