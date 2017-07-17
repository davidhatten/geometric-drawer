// import * as circleUtil from "circleUtils";
function flowerOfLifePreview() {

}

function flowerOfLifeUpdatePreview(event) {

}

function flowerOfLifeDraw(canvas, event) {
    const xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    const radius = parseInt($(`#flowerOfLifeRadius`).val());
    const iterations = parseInt($(`#flowerOfLifeLayers`).val());

    setLineWidth();

    drawFlower(canvas, radius, xyCoords.x, xyCoords.y, iterations);

    history.addHistoryRow(`Flower Of Life-${Date.now()}`,
                            usedCenters,
                            {
                                circleRadiusId: radius,
                                iterateElementId: iterations
                            });
    clearCenters();
}

function previewFlowerEventListener(event) {
    var canvas = document.getElementById("drawingCanvas");
    radius = parseInt($(`#${circleRadiusId}`).val());
    var previewElement = document.getElementById("diameterAnchor");

    var xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());

    var totalPixels = radius * 8;
    var dpi = 300;//The canvas is scalled to 8.5x11 at 300dpi

    var inches = roundFloats(totalPixels/dpi, 2);
    var inchesText = "Diameter of final shape: " + inches +" inches";
    previewElement.innerHTML = inchesText;
}

function drawFlower(canvas, radius, x, y, iterations) {
    var innerPetals = [];
    clearCenters();
    //draw one circle
    var bootstrap1 = drawCircle(canvas, radius, x, y);

    //draw second circle, centered anywhere on the first
    var bootstrap2 = drawCircle(canvas, radius, x, y+radius);
    innerPetals[innerPetals.length] = bootstrap2;

    var centerPoints = intersection(bootstrap1, bootstrap2, radius);

    //Every other circle is centered on the intersection of the previous two
    for (let i = 0; i < 5; i++) {
        var petal = drawCircle(canvas, radius, centerPoints[0].x, centerPoints[0].y);
        innerPetals[innerPetals.length] = petal;

        centerPoints = intersection(bootstrap1, petal, radius);
    }

    var outerPetals = innerPetals;

    for (let i = 0; i < iterations-1; i++) {
        outerPetals = drawPetals(canvas, radius, outerPetals).unique();
    }
}

function drawPetals(canvas, radius, innerPetals) {
    var outerPetals = [];
    for (let i = 0; i < innerPetals.length; i++) {
        for (let j = 0; j < innerPetals.length; j++) {
            var centerPoints = intersection(innerPetals[i], innerPetals[j], radius);
            outerPetals = outerPetals.concat(populateIntersection(canvas, radius, centerPoints));
        }
    }

    var returnPetals = outerPetals.unique();
    for (let i = 0; i < outerPetals.length; i++) {
        for (let j = 0; j < innerPetals.length; j++) {
            var centerPoints = intersection(outerPetals[i], innerPetals[j], radius);
            returnPetals = returnPetals.concat(populateIntersection(canvas, radius, centerPoints));
        }
    }

    return returnPetals.unique();
}

function populateIntersection(canvas, radius, centerPoints) {
    var outerPetals = [];

    if (centerPoints.length > 0){
        for (let i = 0; i < centerPoints.length; i++) {
            if (centerPoints[i] != undefined && usedCentersContains(centerPoints[i]) === false) {
                var petal = drawCircle(canvas, radius, centerPoints[i].x, centerPoints[i].y);
                outerPetals[outerPetals.length] = petal;
            }
        }
    }

    return outerPetals;
}

// Lifted from SO because I don't feel like reliving 7th grade math and if I were in Node I would just get a library anyway
//Should probably optimize this for constant radius...
function intersection(circle0, circle1, radius) {
    var a, dx, dy, d, h, rx, ry;
    var x2, y2;

    /* dx and dy are the vertical and horizontal distances between
     * the circle centers.
     */
    dx = circle1.x - circle0.x;
    dy = circle1.y - circle0.y;

    /* Determine the straight-line distance between the centers. */
    d = Math.sqrt((dy*dy) + (dx*dx));

    /* Check for solvability. */
    if (d > (radius + radius)) {
        /* no solution. circles do not intersect. */
        return [];
    }
    if (d <= Math.abs(radius - radius)) {
        /* no solution. one circle is contained in the other */
        return [];
    }

    /* 'point 2' is the point where the line through the circle
     * intersection points crosses the line between the circle
     * centers.
     */

    /* Determine the distance from point 0 to point 2. */
    a = ((radius*radius) - (radius*radius) + (d*d)) / (2.0 * d) ;

    /* Determine the coordinates of point 2. */
    x2 = circle0.x + (dx * a/d);
    y2 = circle0.y + (dy * a/d);

    /* Determine the distance from point 2 to either of the
     * intersection points.
     */
    h = Math.sqrt((radius*radius) - (a*a));

    /* Now determine the offsets of the intersection points from
     * point 2.
     */
    rx = -dy * (h/d);
    ry = dx * (h/d);

    /* Determine the absolute intersection points. */
    var xi = x2 + rx;
    var xi_prime = x2 - rx;
    var yi = y2 + ry;
    var yi_prime = y2 - ry;

    return [{x:xi, y:yi}, {x:xi_prime, y:yi_prime}];
}

function setFlowerOptions(element) {
    setIterationOptions(element);
    setCircleRadiusOptions(element);
}
