function squarePreview() {

}

function squareUpdatePreview() {

}

function squareDraw(canvas, event) {
    const xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    const sideLength = parseInt($(`#squareSideLength`).val());
    setLineWidth();

    history.addHistoryRow(
        `Square-${Date.now()}`,
        [drawSquare(canvas, sideLength, xyCoords.x, xyCoords.y)],
         {
            circleRadiusId: sideLength,
        }
    );
}