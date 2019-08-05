import React from 'react';
import SliderInput from "./SliderInput";
import { standardLineWidth } from "../../shapeConstants";
import Grid from "@material-ui/core/Grid";

const LineWidth = props => (
    <Grid item>
        <SliderInput
            min={standardLineWidth.min}
            max={standardLineWidth.max}
            name={standardLineWidth.name}
            description={`The width of the drawn lines.`}
            value={props.lineWidth}
            updateValue={props.updateLineWidth} />
    </Grid>
);

export default LineWidth;