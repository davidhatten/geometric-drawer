var petalSelectId = "petalStyleSelect";
var innerRadiusId = "innerRadiusInput";
var outerRadiusId = "outerRadiusInput";
var controlPointId = "controlPointInput";
var angleOffsetId = "angleOffsetInput";
var layers = 0;
var petalStyles = {
    Quadratic: "drawQuadLayer"
};


function drawMandalaEventListener(event) {
    canvas = this;
    layers = 0;
    var xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    var baseRadius = parseInt(document.getElementById("circleRadius").value);

    var innerRadiusValues = {}
    var innerRadiusElems = $('[id^='+innerRadiusId+']').each(function(index) {
        innerRadiusValues[index] = $(this).val();
    })

    setLineWidth();

    drawMandala(canvas, xyCoords.x, xyCoords.y, baseRadius)
}

function drawMandala(canvas, x, y, setRadius) {
    radius = setRadius;
    var angle = 0;


    var controlXY1 = {x:radius * Math.cos(180) + x, y:-radius * Math.sin(180) + y}; 
    var controlXY2 = {x:-radius * Math.cos(180) + x, y:radius * Math.sin(180) + y};


    // drawQuadCurve(canvas, x, y, controlXY1.x, controlXY1.y, y, x+radius);


    for (let i = 0; i <= layers; i++) {
        var petalStyle = document.getElementById(petalSelectId+i.toString()).value

        this[petalStyle](canvas, x, y, radius);        
    }

        

}


function previewMandalaEventListener(event) {

}

function setMandalaOptions(element) {
    var addButtonColumn = createRowDiv(12);
    var addButton = document.createElement("a");
    addButton.setAttribute("href", "#");
    addButton.setAttribute("class", "button");
    addButton.innerHTML = "Add Layer";
    addButton.addEventListener('click', addLayerOptions);

    addButtonColumn.appendChild(addButton)
    element.appendChild(addButtonColumn)
}

// rewrite most of this function after redesign
function addLayerOptions() {
    var options = document.getElementById("customOptionsRowsWrapper");

    // create row
    var layerRow = createRowDiv();
    layerRow.className += " " + "extraOptionsRow";

    //create petal column
    var petalStyleColumn = createRowDiv(2);

    var petalSelect = document.createElement("select");
    petalSelect.id = petalSelectId+layers;
    var petalText = createLabel("Petal Style:");

    populateSelectWithMapValue(petalSelect, petalStyles);

    petalStyleColumn.appendChild(petalText);
    petalStyleColumn.appendChild(petalSelect)

    layerRow.appendChild(petalStyleColumn);

    //create inner radius column
    var innerRadiusColumn = createRowDiv(2);

    var innerRadiusInput = createInputElement(innerRadiusId+layers, 0, "text");
    var innerRadiusText = createLabel("Inner Radius (px):");

    innerRadiusColumn.appendChild(innerRadiusText);
    innerRadiusColumn.appendChild(innerRadiusInput);

    layerRow.appendChild(innerRadiusColumn);

    //create outer radius column
    var outerRadiusColumn = createRowDiv(2);

    var outerRadiusInput = createInputElement(outerRadiusId+layers, 100, "text");
    var outerRadiusText = createLabel("Outer Radius (px):");

    outerRadiusColumn.appendChild(outerRadiusText);
    outerRadiusColumn.appendChild(outerRadiusInput);

    layerRow.appendChild(outerRadiusColumn);


    //create control point distance
    var controlPointColumn = createRowDiv(2);

    var controlPointInput = createInputElement(controlPointId+layers, 75, "text");
    var controlPointText = createLabel("Control Distance (px):");

    controlPointColumn.appendChild(controlPointText);
    controlPointColumn.appendChild(controlPointInput);

    layerRow.appendChild(controlPointColumn);

    //create angle offset
    var angleOffsetColumn = createRowDiv(2);

    var angleOffsetInput = createInputElement(angleOffsetId+layers, 0, "text");
    var angleOffsetText = createLabel("Rotation Offset (deg):");

    angleOffsetColumn.appendChild(angleOffsetText);
    angleOffsetColumn.appendChild(angleOffsetInput);

    layerRow.appendChild(angleOffsetColumn);

    options.insertBefore(layerRow, document.getElementById("customOptions"));
    layers++;
}

function drawQuadLayer(canvas, centerX, centerY, radius) {
    var angle = 0;
    var x = centerX;
    var y = centerY;
    drawCircle(canvas, x, y);

    while (angle < 360) {

        var edgePoint = getPointOnCircle(x, y, radius, 0, angle);
        var perp1 = getPerpendicularLine(x, y, edgePoint.x, edgePoint.y, radius/2)
        var perp2 = getPerpendicularLine(x, y, edgePoint.x, edgePoint.y, -radius/2)

        var outsidePoint = getPointOnLine(x, y, edgePoint.x, edgePoint.y, radius);
        var mostOutsidePoint = getPointOnLine(x, y, edgePoint.x, edgePoint.y, radius*2)
        // drawCircle(canvas, perp1.x, perp1.y);
        // drawCircle(canvas, perp2.x, perp2.y);
        // drawCircle(canvas, outsidePoint.x, outsidePoint.y);

        drawQuadCurve(canvas, edgePoint.x, edgePoint.y, perp1.x, perp1.y, outsidePoint.x, outsidePoint.y)
        drawQuadCurve(canvas, edgePoint.x, edgePoint.y, perp2.x, perp2.y, outsidePoint.x, outsidePoint.y)
        // drawCircle(canvas, outsidePoint.x, outsidePoint.y)
        // // drawLine(canvas, x, y, edgePoint.x, edgePoint.y)
        // // drawLine(canvas, x, y, outsidePoint.x, outsidePoint.y)

        // var outerPerp1 = getPerpendicularLine(x, y, edgePoint.x, edgePoint.y, radius)
        // var outerPerp2 = getPerpendicularLine(x, y, edgePoint.x, edgePoint.y, -radius)
        
        // drawQuadCurve(canvas, outsidePoint.x, outsidePoint.y, outerPerp1.x, outerPerp1.y, mostOutsidePoint.x, mostOutsidePoint.y)
        // drawQuadCurve(canvas, outsidePoint.x, outsidePoint.y, outerPerp2.x, outerPerp2.y, mostOutsidePoint.x, mostOutsidePoint.y)

        angle += 30;
    }
}