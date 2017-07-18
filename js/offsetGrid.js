function offsetGridPreview() {
}

function offsetGridUpdatePreview(event) {
}

function offsetGridDraw(canvas, event) {
    const xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    const iterations = parseInt($(`#offsetGridIterations`).val());
    const radiusOffset = parseInt($(`#offsetGridRadiusOffset`).val());
    const radius = parseInt($(`#offsetGridRadius`).val());

    setLineWidth();

    const usedCenters = drawOffsetGrid(canvas, radius, radiusOffset, xyCoords.x, xyCoords.y, iterations);

    history.addHistoryRow(`Offset Grid-${Date.now()}`, usedCenters, {});
}


function drawOffsetGrid(canvas, radius, radiusOffset, x, y, iterations) {
    const triangleCornerAngles = [];
    const innerPetals = [];
    const degree = 4;
    innerPetals.push(drawCircle(canvas, radius, x, y));

    //split 360, then rotate it by that when you're done
    var degrees = 360/degree;
    var trackAround = 0;
    const  javascriptRotation = (1/degree);
    for (let i = 0; i < degree; i++) {
        triangleCornerAngles.push(((trackAround + degrees)/180) + javascriptRotation);
        trackAround = trackAround + degrees;
    }

    var outerPetals = innerPetals.slice();
    var usedPetals = innerPetals.concat(triangleCornerAngles);
    for (let i = 0; i < iterations; i++) {
        outerPetals = drawGridArm(canvas, radius, outerPetals, radiusOffset, triangleCornerAngles, usedPetals);
        usedPetals = usedPetals.concat(outerPetals);
    }

    return usedPetals;
}

function drawGridArm(canvas, radius, innerPetals, radiusOffset, cornerAngles, usedPetals) {
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

