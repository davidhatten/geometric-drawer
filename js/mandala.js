var petalSelectId = "layerStyleselect";
var controlPointId = "controlPointInput";
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
    layerStyles[selectedLayer]["draw"](canvas, xyCoords);
}

function drawCircleLines(canvas, clickCoords) {
    console.log("request to draw circle");
    radius = parseInt(document.getElementById("circleRadius").value);

    setLineWidth();

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
    var controlPoint = parseInt($("#"+controlPointId).val());

    while (angle < 360) {
        var innerEdgePoint = getPointOnCircle(x, y, radius, 0, angle);
        var outerEdgePoint = getPointOnCircle(x, y, outerRadius, 0, angle);

        var perp1 = getPerpendicularLine(x, y, innerEdgePoint.x, innerEdgePoint.y, controlPoint);
        var perp2 = getPerpendicularLine(x, y, innerEdgePoint.x, innerEdgePoint.y, -controlPoint);

        drawQuadCurve(canvas, innerEdgePoint.x, innerEdgePoint.y, perp1.x, perp1.y, outerEdgePoint.x, outerEdgePoint.y)
        drawQuadCurve(canvas, innerEdgePoint.x, innerEdgePoint.y, perp2.x, perp2.y, outerEdgePoint.x, outerEdgePoint.y)

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

    var column = createColumnDiv();
    var controlPointLabel = createLabel("Control Point Distance (px):");
    var controlPointElement = document.createElement("input");
    controlPointElement.id = controlPointId;
    controlPointElement.type = "number";
    controlPointElement.value = 100;

    column.append(controlPointLabel);
    column.append(controlPointElement);
    row.append(column);

    row.insertAfter(element);

    return row;
}
