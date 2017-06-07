// var triangleCornerAngles = [9/6, 1/6, 5/6];
var triangleCornerAngles = [];
var radiusOffsetId = "radiusOffset";
var degreeOfCirclesId = "degreeOfCircles";
var canvas;

function drawTriangleFormEventListener(event) {
    canvas = this;
    var xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    var iterations = document.getElementById("circleIterations").value;
    var radius = document.getElementById("circleRadius").value;
    var radiusOffset = document.getElementById(radiusOffsetId).value;
    var degreeOfCircles = document.getElementById(degreeOfCirclesId).value;

    setLineWidth();

    drawTriangleForm(canvas, xyCoords.x, xyCoords.y, parseInt(radius), parseInt(iterations), parseInt(radiusOffset), parseInt(degreeOfCircles));
}

function previewTriangleFormEventListener(event) {
    var iterations = parseInt(document.getElementById("circleIterations").value);
    var radiusOffset = parseInt(document.getElementById(radiusOffsetId).value);
    var multipiler = (iterations+1) * 2;
    calculateVariableRadiusOffsetPreview(event, radiusOffset, multipiler);
}


function drawTriangleForm(canvas, x, y, setRadius, iterations, radiusOffset, degree) {
    radius = setRadius;
    usedCenters = [];
    triangleCornerAngles = [];
    var innerPetals = [];
    //neglect this for now.... just using it for positioning
    //var bootstrap1 = drawCircle(canvas, x, y);
    innerPetals.push({x: x, y: y});

    //split 360, then rotate it by that when you're done
    var degrees = 360/degree;
    var trackAround = 0
    for (let i = 0; i < degree; i++) {
        if (degree % 2 === 0) {
            var javascriptRotation = (1/.5*degree);
        }
        else {
            var javascriptRotation = (1/(2*degree));
        }
        triangleCornerAngles.push(((trackAround + degrees)/180) + javascriptRotation);
        trackAround = trackAround + degrees;
    }

    var outerPetals = innerPetals;
    for (let i = 0; i < iterations; i++) {
        outerPetals = drawTrianglePetals(outerPetals, radiusOffset);
    }

    clearCenters();
}

function drawTrianglePetals(innerPetals, radiusOffset) {
    var outerPetals = [];
    for (let i = 0; i < innerPetals.length; i++) {
        for (let j = 0; j < triangleCornerAngles.length; j++) {
            var sqrX = innerPetals[i].x + (radius+radiusOffset) * Math.cos(Math.PI * triangleCornerAngles[j]);
            var sqrY = innerPetals[i].y + (radius+radiusOffset) * Math.sin(Math.PI * triangleCornerAngles[j]);

            var circle = {x:sqrX, y:sqrY};
            if (usedCentersContains(circle) === false) {
                outerPetals.push(drawCircle(canvas, sqrX, sqrY));
                usedCenters.push(circle);
            }
        }
    }

    return outerPetals.unique();
}



function setTriangleFormOptions(element) {
    setIterationOptions(element);

    var row = createRowDiv();
    var column = createColumnDiv();
    var degreeText = createLabel("Degree Of Circles");
    var degreeOfCircles = document.createElement("input");
    degreeOfCircles.id = degreeOfCirclesId;
    degreeOfCircles.type = "text";
    degreeOfCircles.value = 3;

    column.append(degreeText);
    column.append(degreeOfCircles);
    row.append(column);

    row.insertAfter(element);

    setRadiusOffsetOptions(element);

    setCircleRadiusOptions(element);
}

