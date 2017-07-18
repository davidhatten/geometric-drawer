var torusDesigns = {
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
    360: [0],
};
var usedCenters = []; //this is a really gross bit of ugly global state too
const history = new History(); // look more ugly global state
const dimensions = {A4: {x: 2480, y:3508}, letter:{x: 2550, y: 3300}};
Array.prototype.unique = function() {
    var a = this.concat();

    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

function setPageLayout(selector) {
    const selected = selector.value;
    const canvas = getCanvas();

    canvas.setAttribute(`viewBox`, `0 0 ${dimensions[selected].x} ${dimensions[selected].y}`);
}

function clearCanvas() {
    // clear the canvas itself
    $(`#drawingCanvas`).empty();

    // Clear the history table
    history.clearHistory();
}

function exportCanvas() {
    var svg_xml = (new XMLSerializer()).serializeToString(getCanvas());
    var img = new Image();
    img.src = `data:image/svg+xml;base64,${btoa(svg_xml)}`;
    img.onload = function() {
        var tempCanvas = document.createElement(`canvas`);
        tempCanvas.width = `2550`;
        tempCanvas.height = `3300`;
        var ctx = tempCanvas.getContext(`2d`);
        ctx.drawImage(img, 0, 0);

        var sUrl = tempCanvas.toDataURL(`image/png`);
        var link = document.createElement(`a`);
        link.href = sUrl;
        link.setAttribute(`target`, `_blank`);

        if (link.download !== undefined) {
            //Set HTML5 download attribute. This will prevent file from opening if supported.
            var fileName = `geometry.png`;
            link.download = fileName;
        }

        //Dispatching click event.
        if (document.createEvent) {
            var e = document.createEvent(`MouseEvents`);
            e.initEvent(`click`, true, true);
            link.dispatchEvent(e);
            return true;
        }
        window.open(sUrl, `_blank`);
        $(link).remove();
    };
}

function getCanvas() {
    return document.getElementById(`drawingCanvas`);
}

function repopulateSkipSelect(rotationSelect, skipSelect) {
    const rotation = rotationSelect.val();
    const skipFactors = torusDesigns[rotation];

    skipSelect.empty();

    for (let i = 0; i < skipFactors.length; i++) {

        const skipFactor = skipFactors[i];
        const option = $(`<option></option>`);
        option.val(skipFactor);
        option.text(skipFactor);

        skipSelect.append(option);
    }
}

function torusUpdateSkipFactors(event) {
    const rotation = $(`#torusRotations`);
    const skip = $(`#torusSkipFactor`);
    repopulateSkipSelect(rotation, skip);
    torusUpdatePreview(event);
}

function initializeTorus() {
    const rotationSelect = $(`#torusRotations`);
    const skipSelect = $(`#torusSkipFactor`);
    for (let rotation in torusDesigns) {
        if (torusDesigns.hasOwnProperty(rotation)) {
            let option = $(`<option></option>`);
            option.val(rotation);
            option.text(rotation);

            rotationSelect.append(option);
        }
    }
    rotationSelect.val(`10`);
    repopulateSkipSelect(rotationSelect, skipSelect);

    skipSelect.val(`10`);

    $(`#torus .styleControl`).change(function(event) {
        torusUpdateSkipFactors(event);
    });
}

function initializeOffsetGrid() {
    $(`#offsetGrid .styleControl`).change(function(event) {
        offsetGridUpdatePreview(event);
    });
}

function initializeMetatronsCube() {
    $(`#metatronsCube .styleControl`).change(function(event) {
        metatronsCubeUpdatePreview(event);
    });
}

function initializeCircle() {
    $(`#circle .styleControl`).change(function(event) {
        circleUpdatePreview(event);
    });
}

function initializeQuadCurve() {
    $(`#quadCurve .styleControl`).change(function(event) {
        quadCurveUpdatePreview(event);
    });
}

function initializeDots() {
    $(`#dots .styleControl`).change(function(event) {
        dotsUpdatePreview(event);
    });
}

function initializeFlowerOfLife() {
    $(`#flowerOfLife .styleControl`).change(function(event) {
        flowerOfLifeUpdatePreview(event);
    });
}

function initializeCanvas() {
    $(`#drawingCanvas`).click(function(event) {
        drawShape(event);
    });

}


function drawShape(event) {
    const canvas = getCanvas();

    const activeId = $(`#stylesPanel .accordion-item.is-active`)[0].id;
    window[`${activeId}Draw`](canvas, event);
}

$(document).ready(
    function() {
        //Bootstrapping with initial settings
        initializeOffsetGrid();
        initializeFlowerOfLife();
        initializeMetatronsCube();
        initializeTorus();
        initializeCircle();
        initializeQuadCurve();
        initializeDots();


        initializeCanvas();

        $(`#stylesPanel`).on({
            "down.zf.accordion": function(event) {
                const activePanel = $(event.target).find(`.is-active`)[0];
                const currPanelId = activePanel.id;

                window[`${currPanelId}Preview`]();
            },
            "up.zf.accordion": function(event) {
            },
        });
    }
);
