function startPath(x, y) {
    return `M ${x} ${y}`
}

function moveTo(x, y, path) {
    return `${path} M ${x} ${y}`
}

function addCircle(x, y, radius, path) {
    var startXY = getPointOnCircle(x, y, radius, 0, 0);
    var midXY = getPointOnCircle(x, y, radius, 0, 180);

    path = moveTo(startXY.x, startXY.y, path);
    return `${path} A ${radius} ${radius} 0 0 0 ${midXY.x} ${midXY.y}
                    A ${radius} ${radius} 0 0 0 ${startXY.x} ${startXY.y}`
}

function addQuadCurve(controlX, controlY, endX, endY, path) {
    return `${path} Q ${controlX} ${controlY} ${endX} ${endY}`
}

function addSmoothCurve(endX, endY, path) {
    return `${path} T ${endX} ${endY}`
}

function endPath(path) {
    return `${path} z`
}

function writePath(path, canvas) {
    var ctx = Snap(canvas);
    var curve = ctx.path(path);
    curve.attr({strokeWidth: lineWidth, strokeLinecap: "round", stroke: "#000", fill:"transparent"});
}
