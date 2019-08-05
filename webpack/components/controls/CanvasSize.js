import React from 'react';
import SliderInput from "./SliderInput";

const CanvasSize = props => (
    <React.Fragment>
        <SliderInput
            min={0}
            max={5000}
            name={`Canvas Height (px)`}
            description={`Height of the canvas, in pixels. Default is set to print true on 8.5"x11" paper.`}
            value={props.canvasHeight}
            updateValue={props.updateCanvasHeight}
        />
        <SliderInput
            min={0}
            max={5000}
            name={`Canvas Width (px)`}
            description={`Width of the canvas, in pixels. Default is set to print true on 8.5"x11" paper.`}
            value={props.canvasWidth}
            updateValue={props.updateCanvasWidth}
        />
    </React.Fragment>
);

export default CanvasSize;