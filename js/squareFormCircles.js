var squareCornerAngles = [.25, .75, 1.25, 1.75];
var canvas;
var squareIterations = 0;

function drawSquareFormEventListener(event) {
    squareIterations = 0;
    canvas = this;
    var xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    var iterations = document.getElementById("circleIterations").value;
    var radius = document.getElementById("circleRadius").value; 
    var radiusOffset = document.getElementById(radiusOffsetId).value; 

    setLineWidth();

    drawSquareForm(canvas, xyCoords.x, xyCoords.y, parseInt(radius), parseInt(iterations), parseInt(radiusOffset));
}

function previewSquareFormEventListener(event) {
    var iterations = parseInt(document.getElementById("circleIterations").value);
    var radiusOffset = parseInt(document.getElementById(radiusOffsetId).value); 
    var multipiler = (iterations+1) * 2;
    calculateVariableRadiusOffsetPreview(event, radiusOffset, multipiler);
}

function drawSquareForm(canvas, x, y, setRadius, iterations, radiusOffset) {
    radius = setRadius;
    usedCenters = [];
    var innerPetals = [];
    var bootstrap1 = drawCircle(canvas, x, y);
    innerPetals.push(bootstrap1);

    var outerPetals = innerPetals;
    for (let i = 0; i < iterations; i++) {
        outerPetals = drawSquarePetals(outerPetals, radiusOffset);
    }

    clearCenters();
    console.log("Square drawing " + squareIterations);
}    

function drawSquarePetals(innerPetals, radiusOffset) {
    var outerPetals = [];
    for (let i = 0; i < innerPetals.length; i++) {
        for (let j = 0; j < squareCornerAngles.length; j++) {
            squareIterations++;
            var sqrX = innerPetals[i].x + (radius+radiusOffset) * Math.cos(Math.PI * squareCornerAngles[j]);    
            var sqrY = innerPetals[i].y + (radius+radiusOffset) * Math.sin(Math.PI * squareCornerAngles[j]);

            if (usedCentersContains({x:sqrX, y:sqrX}) === false) {
                outerPetals.push(drawCircle(canvas, sqrX, sqrY));
            }
        }
    }

    return outerPetals.unique();
}

function setSquareFormOptions(element) {
    setIterationOptions(element);

    setRadiusOffsetOptions(element);

    setCircleRadiusOptions(element);

}