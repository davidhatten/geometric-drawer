// var triangleCornerAngles = [9/6, 1/6, 5/6];
var triangleCornerAngles = [];
var degreeOfCirclesId = "degreeOfCircles";
var radius;

function circleFlowerPreview() {
    console.log("preview method requested");
}

function circleFlowerUpdatePreview(event) {
    console.log("update preview called ", event);
}

function circleFlowerDraw(canvas, event) {
    console.log("canvas is ", canvas);
    const xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    const iterations = parseInt($("#circleFlowerIterations").val());
    const radiusOffset = parseInt($("#circleFlowerRadiusOffset").val());
    const degreeOfCircles = parseInt($("#circleFlowerAxes").val());
    radius = parseInt($("#circleFlowerRadius").val());

    setLineWidth();

    drawTriangleForm(canvas, xyCoords.x, xyCoords.y, iterations, radiusOffset, degreeOfCircles);

    history.addHistoryRow(`Trangle Form-${Date.now()}`, usedCenters, {});
    clearCenters();
}

function previewTriangleFormEventListener(event) {
    var iterations = parseInt(document.getElementById("circleIterations").value);
    var radiusOffset = parseInt(document.getElementById(radiusOffsetId).value);
    var multipiler = (iterations+1) * 2;
    radius = parseInt($(`#${circleRadiusId}`).val());
    calculateVariableRadiusOffsetPreview(event, radius, radiusOffset, multipiler);
}


function drawTriangleForm(canvas, x, y, iterations, radiusOffset, degree) {
    usedCenters = [];
    triangleCornerAngles = [];
    var innerPetals = [];

    innerPetals.push({x: x, y: y});

    //split 360, then rotate it by that when you're done
    var degrees = 360/degree;
    var trackAround = 0;
    for (let i = 0; i < degree; i++) {
        let javascriptRotation;
        if (degree % 2 === 0) {
            javascriptRotation = (1/.5*degree);
        }
        else {
            javascriptRotation = (1/(2*degree));
        }
        triangleCornerAngles.push(((trackAround + degrees)/180) + javascriptRotation);
        trackAround = trackAround + degrees;
    }

    var outerPetals = innerPetals;
    for (let i = 0; i < iterations; i++) {
        outerPetals = drawTrianglePetals(canvas, outerPetals, radiusOffset);
    }
}

function drawTrianglePetals(canvas, innerPetals, radiusOffset) {
    var outerPetals = [];
    for (let i = 0; i < innerPetals.length; i++) {
        for (let j = 0; j < triangleCornerAngles.length; j++) {
            var sqrX = innerPetals[i].x + (radius+radiusOffset) * Math.cos(Math.PI * triangleCornerAngles[j]);
            var sqrY = innerPetals[i].y + (radius+radiusOffset) * Math.sin(Math.PI * triangleCornerAngles[j]);

            var circle = {x:sqrX, y:sqrY};
            if (arrayContains(outerPetals, circle) === false) {
                outerPetals.push(drawCircle(canvas, radius, sqrX, sqrY));
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

