var rotationElementId = "degreeOfRotation";
var skipElementId = "skipFactor";
var skipGroupElementId = "skipGrouping";
var goodDesigns = {
    1: [0, 1, 2, 3,4,5,6,8, 7,9,10,11,12,13, 14, 15,16, 17, 18,19, 20, 21, 22, 23 ,24,30,36,40,45,60,72,90,120,180,360],
    2: [0, 1, 2, 3,4,5,6,8, 7,9,10,11,12,13, 14, 15,16, 17, 18,20,24,30,36,40,45,60,72,90,120,180],
    3: [0, 1, 2, 3,4,5,6,8, 7,9,10,11,12,13, 14, 15,16, 17, 18,20,24,30,36,40,45,60,72,90,120],
    4: [0, 1, 2, 4,5,6,8,9, 7,10,11,12,13, 14, 15,16, 17, 18,20,24,30,36,40,45,60,72,90],
    5: [0, 1, 2, 3,4,5,6,8, 7,9,10,11,12,13, 14, 15,16, 17, 18,20,24,30,36,40,45,60,72],
    6: [0, 1, 2, 3,4,5,6,8, 7,9,10,11,12,13, 14, 15,16, 17, 18,20,24,30,36,40,45,60],
    8: [0, 1, 2, 4,5,6,8,9, 7,10,11,12,13, 14, 15,16, 17, 18,20,24,30,36,40,45],
    9: [0, 1, 2, 3,4,5,6,8, 7,9,10,12,13, 14,15,16, 17, 18,20,24,30,36,40],
    10: [0, 1, 2, 3, 4,5,6, 7,8,9,10,11,12,13, 14,15,16, 17, 18,20,24,30,36],
    12: [0, 1, 2, 4, 5, 9, 14 ],
    15: [0, 1, 2, 3, 4, 5, 7,11],
    18: [0, 1, 3, 4, 9],
    20: [0, 1, 2, 5 ,8],
    24: [0, 2, 4 ],
    30: [0, 1, 2, 3, 5],
    36: [0, 1, 4 ],
    40: [0, 2],
    45: [0, 1, 3],
    60: [0, 1, 2],
    72: [0],
    90: [0, 1],
    120: [0],
    180: [0],
    360: [0]
}

function drawTorusEventListener(event) {
    var canvas = this;
    var xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    var radius = parseFloat(document.getElementById("circleRadius").value); 
    var radiusOffset = parseFloat(document.getElementById(radiusOffsetId).value); 
    var rotation = Math.abs(parseFloat(document.getElementById(rotationElementId).value));
    var skipFactor = Math.abs(parseInt(document.getElementById(skipElementId).value));

    setLineWidth();

    drawTorus(canvas, xyCoords.x, xyCoords.y, radius, radiusOffset, rotation, skipFactor);
}

function previewTorusEventListener(event) {
    var radiusOffset = parseFloat(document.getElementById(radiusOffsetId).value);   
    calculateVariableRadiusOffsetPreview(event, radiusOffset, 4);
}

function updateSkipFactors() {
    var rotation = document.getElementById(rotationElementId)
    var skip = document.getElementById(skipElementId)
    repopulateSkipSelect(rotation, skip);
    
}

function repopulateSkipSelect(rotationSelect, skipSelect) {
    var rotation = rotationSelect.value
    var skipFactors = goodDesigns[rotation];

    while (skipSelect.firstChild) {
        skipSelect.removeChild(skipSelect.firstChild);
    }

    for (var i = 0; i < skipFactors.length; i++) {
        var skipFactor = skipFactors[i]
        var option = document.createElement("option");
        option.value = skipFactor;
        option.text = skipFactor;

        skipSelect.appendChild(option);
    }
}

function setTorusOptions(element) {
    var column = createColumnDiv(4);
    var rotationText = createLabel("Degree of Rotation:");
    var rotationElement = document.createElement("select");

    var rotationSelect = document.createElement("select");
    rotationSelect.id = rotationElementId;
    rotationSelect.addEventListener('change', updateSkipFactors)

    for (var rotation in goodDesigns) {
        if (goodDesigns.hasOwnProperty(rotation)) {
            var option = document.createElement("option");
            option.value = rotation;
            option.text = rotation

            rotationSelect.appendChild(option);
        }
    }

    column.appendChild(rotationText);
    column.appendChild(rotationSelect);
    element.appendChild(column);

    var skipColumn = createColumnDiv(4);
    var skipSelect = document.createElement("select");
    skipSelect.id = skipElementId;
    var skipText = createLabel("Skip factor:");

    skipColumn.appendChild(skipText);
    skipColumn.appendChild(skipSelect);
    element.appendChild(skipColumn)

    repopulateSkipSelect(rotationSelect, skipSelect);

    setRadiusOffsetOptions(element);
}

function drawTorus(canvas, x, y, setRadius, radiusOffset, rotation, skipFactor) {
    radius = setRadius;
    var centerCircle = {x: x, y: y};

    var angle = rotation;
    var skipCounter = 0; 

    while (angle <= 360) {
        if (skipFactor != 0 && skipCounter == skipFactor) {
            skipCounter = 0;
        } else {
            var circlePoint = getPointOnCircle(x, y, radius, radiusOffset, angle)
            drawCircle(canvas, circlePoint.x, circlePoint.y);
            skipCounter++;
        }
            
        angle += rotation;
    }
}
