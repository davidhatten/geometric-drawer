var petalSelectId = "layerStyleselect";
var xControlPointId = "xControlPointInput";
var yControlPointId = "yControlPointInput";
var angleOffsetId = "angleOffsetInput";
var layers = 0;
var layerStyles = {
    "Circle": {"options": drawCircleLayerOptions, "draw": drawCircleLines},
    "Quadratic Petal": {"options": drawQuadLayerOptions, "draw": drawQuadLines}
};


function drawMandalaEventListener(event) {
    // This is effectively a passthrough to the layerStyles data structure
    canvas = this;
    var selectedLayer = $("#layerStyleSelect").val();
    var xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());

    setLineWidth();

    layerStyles[selectedLayer]["draw"](canvas, xyCoords);
}

function drawCircleLines(canvas, clickCoords) {
    console.log("request to draw circle");
    radius = parseInt(document.getElementById("circleRadius").value);

    drawCircle(canvas, clickCoords.x, clickCoords.y);
}

function drawQuadLines(canvas, clickCoords) {
    // TODO: axis subdivision options
    // TODO: petal warping options
    // TODO: outer radius option
    var angle = 0;
    var x = clickCoords.x;
    var y = clickCoords.y;

    radius = parseInt($("#"+innerRadiusId).val());
    var outerRadius = parseInt($("#"+outerRadiusId).val());
    var xControlPoint = parseInt($("#"+xControlPointId).val());
    var yControlPoint = parseInt($(`#${yControlPointId}`).val());
    while (angle < 360) {
        var innerEdgePoint = getPointOnCircle(x, y, radius, 0, 0);
        var outerEdgePoint = getPointOnCircle(x, y, outerRadius, 0, 0);

        // This is now in a weird flux state that doesn't accurately reperesent the UX
        var perp1 = getPerpendicularLine(x, y, innerEdgePoint.x, innerEdgePoint.y, xControlPoint);
        var perp2 = getPerpendicularLine(x, y, innerEdgePoint.x, innerEdgePoint.y, -xControlPoint);



        var xEndPoint = outerEdgePoint.x - innerEdgePoint.x;
        var yEndPoint = outerEdgePoint.y - innerEdgePoint.y;
        // if you're going to use relative coords, you need an entirely different way of building the path by using t
        // probably need to build a stack using a "drawQuadLayer" or something better because naming is getting shitty
        // aw crap, which reminds me, I should probably add in the axis options before that.

        var controlPoint = {x: yControlPoint, y: -xControlPoint};
        drawSinglePetal(canvas,
            rotateAroundPoint(x, y, innerEdgePoint, angle),
            rotateAroundPoint(x, y, perp1, angle),
            rotateAroundPoint(x, y, perp2, angle),
            rotateAroundPoint(x, y, outerEdgePoint, angle));

        angle += 30;
    }
}

function drawSinglePetal(canvas, innerEdgePoint, controlPointLeft, controlPointRight, outerEdgePoint) {
    // take the data and shift it by angle degrees
    drawQuadCurve(canvas, innerEdgePoint.x, innerEdgePoint.y, controlPointLeft.x, controlPointLeft.y, outerEdgePoint.x, outerEdgePoint.y);
    drawQuadCurve(canvas, innerEdgePoint.x, innerEdgePoint.y, controlPointRight.x, controlPointRight.y, outerEdgePoint.x, outerEdgePoint.y);
}

function rotateAroundPoint(xCenter, yCenter, rotatePoint, angle) {
    console.log("rotatePoint is", rotatePoint);
    var sin = sinDeg(angle);
    var cos = cosDeg(angle);

    rotatePoint.x -= xCenter;
    rotatePoint.y -= yCenter;

    result = {x: (rotatePoint.x * cos) - (rotatePoint.y * sin), y: (rotatePoint.x * sin) + (rotatePoint.y * cos)};
    result.x += xCenter;
    result.y += yCenter;

    console.log("I rotated a point", result);
    return result;
}

function sinDeg(angleInDegrees) {
    return Math.sin(angleInDegrees * (Math.PI / 180));
}

function cosDeg(angleInDegrees) {
    return Math.cos(angleInDegrees * (Math.PI / 180));
}

function populateSelectWithMapValue(select, options) {
    for (var option in options) {
        if (options.hasOwnProperty(option)) {
            var optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.text = option;

            select.appendChild(optionElement);
        }
    }
}


function previewMandalaEventListener(event) {
    //TODO: This should probably update the size based on your current radius
}

function setMandalaOptions(element) {

    // Layer style selector
    var layerStylesRow = setLayerSelectionOptions(element);
    console.log("the row is ", layerStylesRow);
    // We want to insert the options after the select
    // and we default at the circle layer
    drawCircleLayerOptions(layerStylesRow);
}

function setLayerSelectionOptions(element) {
    var layerStylesRow = createRowDiv();
    layerStylesRow.attr("id","layerStyleRow");
    var layerStylesColumn = createColumnDiv();
    var layerSelectText = createLabel("Layer Style:")
    // TODO: convert all creations and lookups to jquery for consistency
    var layerSelectElement = document.createElement("select");
    layerSelectElement.id = "layerStyleSelect";
    layerSelectElement.onchange = changeMandalaOptions;
    populateSelectWithMapValue(layerSelectElement, layerStyles);

    layerStylesColumn.append(layerSelectText);
    layerStylesColumn.append(layerSelectElement);
    layerStylesRow.append(layerStylesColumn);
    layerStylesRow.insertAfter(element);

    return layerStylesRow;
}

function changeMandalaOptions(element) {
    console.log("Request to change has happened");
    console.log("My element is" ,element);

    $('.mandalaOptionRow').remove();

    var selectedLayer = element.target.value;
    layerStyles[selectedLayer]["options"]($("#layerStyleRow"));
}

function drawQuadLayerOptions(element) {
    var innerOuterRadRow = setInnerOuterRadiusOptions(element, ["mandalaOptionRow"]);
    var controlPointRow = setControlPointOptions(innerOuterRadRow, ["mandalaOptionRow"]);
}

function drawCircleLayerOptions(element) {
    setCircleRadiusOptions(element, ["mandalaOptionRow"]);
}

function setControlPointOptions(element, classNames) {
    var row = createRowDiv();

    addClasses(row, classNames);

    var xColumn = createColumnDiv();
    var xControlPointLabel = createLabel("Control Point X Offset (px):");
    var xControlPointElement = document.createElement("input");
    xControlPointElement.id = xControlPointId;
    xControlPointElement.type = "number";
    xControlPointElement.value = 100;

    xColumn.addClass("large-6");
    xColumn.append(xControlPointLabel);
    xColumn.append(xControlPointElement);
    row.append(xColumn);

    var yColumn = createColumnDiv();
    var yControlPointLabel = createLabel("Control Point Y Offset (px)");
    var yControlPointElement = document.createElement("input");
    yControlPointElement.id = yControlPointId;
    yControlPointElement.type = "number";
    yControlPointElement.value = 100;

    yColumn.addClass("large-6");
    yColumn.append(yControlPointLabel);
    yColumn.append(yControlPointElement);
    row.append(yColumn);

    row.insertAfter(element);

    return row;
}

function setInnerOuterRadiusOptions(element, classNames) {
    var row = createRowDiv();

    addClasses(row, classNames);

    var column = createColumnDiv();
    var radiusLabel = createLabel("Inner Radius (px):");
    var radiusElement = document.createElement("input");
    radiusElement.id = innerRadiusId;
    radiusElement.type = "number";
    radiusElement.value = 200;

    column.addClass("large-6");
    column.append(radiusLabel);
    column.append(radiusElement);
    row.append(column);

    var outerColumn = createColumnDiv();
    var outerRadiusLabel = createLabel("Outer Radius (px):");
    var outerRadiusElement = document.createElement("input");
    outerRadiusElement.id = outerRadiusId;
    outerRadiusElement.type = "number";
    outerRadiusElement.value = 300;

    outerColumn.addClass("large-6");
    outerColumn.append(outerRadiusLabel);
    outerColumn.append(outerRadiusElement);
    row.append(outerColumn);

    row.insertAfter(element);

    return row;
}


function setAxisOptions(element, classNames) {

}
