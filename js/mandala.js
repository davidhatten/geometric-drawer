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
        var innerEdgePoint = getPointOnCircle(x, y, radius, 0, angle);
        var outerEdgePoint = getPointOnCircle(x, y, outerRadius, 0, angle);

        // var perp1 = getPerpendicularLine(x, y, innerEdgePoint.x, innerEdgePoint.y, controlPoint);
        // var perp2 = getPerpendicularLine(x, y, innerEdgePoint.x, innerEdgePoint.y, -controlPoint);


        var xEndPoint = outerEdgePoint.x - innerEdgePoint.x;
        var yEndPoint = outerEdgePoint.y - innerEdgePoint.y;
        drawQuadCurve(canvas, innerEdgePoint.x, innerEdgePoint.y, xControlPoint, yControlPoint, xEndPoint, yEndPoint);
        drawQuadCurve(canvas, innerEdgePoint.x, innerEdgePoint.y, -xControlPoint, -yControlPoint, xEndPoint, yEndPoint);

        angle += 30;
    }
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
    var innerRadRow = setInnerRadiusOptions(element, ["mandalaOptionRow"]);
    var outerRadRow = setOuterRadiusOptions(innerRadRow, ["mandalaOptionRow"]);
    var controlPointRow = setControlPointOptions(outerRadRow, ["mandalaOptionRow"]);
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

    xColumn.append(xControlPointLabel);
    xColumn.append(xControlPointElement);
    row.append(xColumn);

    var yColumn = createColumnDiv();
    var yControlPointLabel = createLabel("Control Point Y Offset (px)");
    var yControlPointElement = document.createElement("input");
    yControlPointElement.id = yControlPointId;
    yControlPointElement.type = "number";
    yControlPointElement.value = 100;

    yColumn.append(yControlPointLabel);
    yColumn.append(yControlPointElement);
    row.append(yColumn);

    row.insertAfter(element);

    return row;
}
