//I called this 'circleUtils' in a naive attempt to limit its scope
//this is just utils. It's... it's just utils.
//Forgive me.

var iterateElementId = "circleIterations";
var circleRadiusId = "circleRadius";
var radiusOffsetId = "radiusOffset";
var usedCenters = [];
var scaleOffset = 1;
var lineWidth = 1;

function setIterationOptions(element) {
    var row = createRowDiv();
    var column = createColumnDiv();
    var iterationLabel = createLabel("Number of Iterations:");
    var iterateElement = document.createElement("input");
    iterateElement.id = iterateElementId;
    iterateElement.type = "text";
    iterateElement.value = 3;

    column.append(iterationLabel);
    column.append(iterateElement);
    row.append(column);

    row.insertAfter(element);
}

function setCircleRadiusOptions(element, classNames) {
    var row = createRowDiv();

    addClasses(row, classNames);

    var column = createColumnDiv();
    var radiusLabel = createLabel("Circle Radius (px):");
    var radiusElement = document.createElement("input");
    radiusElement.id = circleRadiusId;
    radiusElement.type = "number";
    radiusElement.value = 200;

    column.append(radiusLabel);
    column.append(radiusElement);
    row.append(column);

    row.insertAfter(element);

    return row;
}

function setInnerRadiusOptions(element, classNames) {
    var row = createRowDiv();

    addClasses(row, classNames);

    var column = createColumnDiv();
    var radiusLabel = createLabel("Inner Radius (px):");
    var radiusElement = document.createElement("input");
    radiusElement.id = circleRadiusId;
    radiusElement.type = "number";
    radiusElement.value = 200;

    column.append(radiusLabel);
    column.append(radiusElement);
    row.append(column);

    row.insertAfter(element);

    return row;
}

function addClasses(element, classNames) {
    if (classNames !== undefined) {
        for (var i = 0; i < classNames.length; i++) {
            element.addClass(classNames[i]);
        }
    }
}

function setRadiusOffsetOptions(element) {
    var row = createRowDiv();
    var column = createColumnDiv();
    var offsetText = createLabel("Radius Offset For Drawing Circles (px):");
    var radiusOffset = document.createElement("input");
    radiusOffset.id = radiusOffsetId;
    radiusOffset.type = "text";
    radiusOffset.value = 0;

    column.append(offsetText);
    column.append(radiusOffset);
    row.append(column);

    row.insertAfter(element);
}

function createRowDiv() {
    var row = $("<div>", {"class": "row customOptionRow"});
    return row;
}

function createColumnDiv() {
    var column = $("<div>", {"class": "column"});
    return column;
}

function createLabel(text) {
    var label = document.createElement("label");
    label.innerHTML = text;
    return label;
}


function drawCircle(canvas, x, y) {
    console.log("drawing circle at " + x + " " + y);
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = lineWidth; //ewwww globals
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    var circle = {x: x, y: y};
    usedCenters[usedCenters.length] = circle;

    // used for testing, viewing centers
    //drawCrosshairs(ctx, x, y);

    return circle;
}

function drawCrosshairs(ctx, x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+40, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x-40, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y-40);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y+40);
    ctx.stroke();
}

function drawLine(canvas, startX, startY, endX, endY) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = lineWidth; //ewwww globals
    ctx.lineCap = "round";
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function drawQuadCurve(canvas, sX, sY, cX, cY, eX, eY) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(sX, sY);
    ctx.quadraticCurveTo(cX, cY, eX, eY);
    ctx.stroke()
}

function usedCentersContains(centerPoint) {
    for (let i = 0; i < usedCenters.length; i++) {
        if (roundFloats(usedCenters[i].x, 3) === roundFloats(centerPoint.x, 3) && roundFloats(usedCenters[i].y, 3) === roundFloats(centerPoint.y, 3)) {
            return true;
        }
    }

    return false;
}

function clearCenters() {
    usedCenters = [];
}


function roundFloats(float, decimalPoints) {
    var roundingFactor = Math.pow(10, decimalPoints);
    if (decimalPlaces(float) > 0) {
        return Math.round(float * roundingFactor) / roundingFactor;
    }

    return float;
}

function decimalPlaces(num) {
  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }
  return Math.max(
       0,
       // Number of digits right of decimal point.
       (match[1] ? match[1].length : 0)
       // Adjust for scientific notation.
       - (match[2] ? +match[2] : 0));
}

function getMousePositionInCanvas(canvas, event, positionOverrides) {
    var xCoord = -1;
    var yCoord = -1;
    var rect = canvas.getBoundingClientRect();
    scaleOffset = getScaleOffset(canvas);
    if (positionOverrides.centerHorizontal === true) {
        xCoord = (rect.width/2)*scaleOffset.x;
    }
    if (positionOverrides.centerVertical === true) {
        yCoord = (rect.height/2)*scaleOffset.y;
    }
    return {
        x: xCoord > 0 ? xCoord : (event.clientX - rect.left)*scaleOffset.x,
        y: yCoord > 0 ? yCoord : (event.clientY - rect.top)*scaleOffset.y
    };
}

function getScaleOffset(canvas) {
    var newOffsetX = canvas.width / canvas.offsetWidth;
    var newOffsetY = canvas.height / canvas.offsetHeight;

    return {x:newOffsetY, y:newOffsetY};
}

function calculateVariableRadiusOffsetPreview(event, radiusOffset, radiusMultiplier) {
    var canvas = document.getElementById("drawingCanvas");
    var radius = parseInt(document.getElementById("circleRadius").value);
    var previewElement = document.getElementById("diameterAnchor");

    var xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());

    var totalPixels = (radius + radiusOffset) * radiusMultiplier;
    var dpi = 300;//The canvas is scalled to 8.5x11 at 300dpi

    var inches = roundFloats(totalPixels/dpi, 2);
    var inchesText = "Diameter of final shape: " + inches +" inches";
    previewElement.innerHTML = inchesText;
}

function setLineWidth() {
    lineWidth = parseFloat(document.getElementById("lineWidth").value);
}

function getPointOnCircle(x, y, radius, radiusOffset, angleInDegrees) {
    var sqrY = y + (radius+radiusOffset) * Math.sin(Math.PI * angleInDegrees/180);
    var sqrX = x + (radius+radiusOffset) * Math.cos(Math.PI * angleInDegrees/180);

    return {x: sqrX, y: sqrY};
}

//Calculates distance from the second x,y given
function getPointOnLine(x1, y1, x2, y2, distance) {
    var normals = calculateNormalVector(x1, y1, x2, y2);

    return {x: x2 + normals.x*distance, y: y2 + normals.y*distance}
}

//It will return the point to draw the perpendicular line starting from the second x,y given
function getPerpendicularLine(x1, y1, x2, y2, distance) {
    var normals = calculateNormalVector(x1, y1, x2, y2)

    var perpVector = {x: -normals.y, y: normals.x};

    return {x: x2 + distance * perpVector.x, y: y2 + distance * perpVector.y};

}

function calculateNormalVector(x1, y1, x2, y2) {
    var slopeX = x2 - x1;
    var slopeY = y2 - y1;

    var lineLength = Math.sqrt(slopeX * slopeX + slopeY * slopeY);

    return {x: slopeX/lineLength, y: slopeY/lineLength};
}

function getPositionOverrides() {
    var horiz = Boolean(document.getElementById("centerHorizontal").checked);
    var vert = Boolean(document.getElementById("centerVertical").checked);

    return {centerHorizontal: horiz, centerVertical: vert};
}

function createInputElement(id, value, type) {
    var result = document.createElement("input");
    result.id = id;
    result.value = value;
    result.type = "text";
    return result;
}
