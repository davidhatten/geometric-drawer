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

    const usedCenters = drawFlower(canvas, radius, 0, xyCoords.x, xyCoords.y, iterations);

    history.addHistoryRow(`Flower Of Life-${Date.now()}`,
        usedCenters,
        {
            circleRadiusId: radius,
            iterateElementId: iterations,
        });
    clearCenters();
}


function drawFlower(canvas, radius, radiusOffset, x, y, iterations) {
    const triangleCornerAngles = [];
    const innerPetals = [];
    const degree = 6;
    innerPetals.push(drawCircle(canvas, radius, x, y));

    //split 360, then rotate it by that when you're done
    var degrees = 360/degree;
    var trackAround = 0;
    const  javascriptRotation = (1/.5*degree);
    for (let i = 0; i < degree; i++) {
        triangleCornerAngles.push(((trackAround + degrees)/180) + javascriptRotation);
        trackAround = trackAround + degrees;
    }

    var outerPetals = innerPetals.slice();
    var usedPetals = innerPetals.concat(triangleCornerAngles);
    for (let i = 0; i < iterations; i++) {
        outerPetals = drawFlowerPetals(canvas, radius, outerPetals, radiusOffset, triangleCornerAngles, usedPetals);
        usedPetals = usedPetals.concat(outerPetals);
    }

    return usedPetals;
}

function drawFlowerPetals(canvas, radius, innerPetals, radiusOffset, cornerAngles, usedPetals) {
    var outerPetals = [];
    for (let i = 0; i < innerPetals.length; i++) {
        for (let j = 0; j < cornerAngles.length; j++) {
            var sqrX = innerPetals[i].x + (radius+radiusOffset) * Math.cos(Math.PI * cornerAngles[j]);
            var sqrY = innerPetals[i].y + (radius+radiusOffset) * Math.sin(Math.PI * cornerAngles[j]);

            var circle = {x:sqrX, y:sqrY};
            if (arrayContains(outerPetals, circle) === false && arrayContains(usedPetals, circle) === false) {
                outerPetals.push(drawCircle(canvas, radius, sqrX, sqrY));
            }
        }
    }

    return outerPetals.unique();
}

