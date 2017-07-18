function circlePreview() {

}

function circleUpdatePreview() {

}

function circleDraw(canvas, event) {
    const xyCoords = getMousePositionInCanvas(canvas, event, getPositionOverrides());
    const radius = parseInt($(`#circleRadius`).val());
    setLineWidth();

    history.addHistoryRow(`Circle-${Date.now()}`,
        [drawCircle(canvas, radius, xyCoords.x, xyCoords.y)],
        {
            circleRadiusId: radius,
        });
}
