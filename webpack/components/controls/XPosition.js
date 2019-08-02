import React from 'react';
import SliderInput from "./SliderInput";
import Grid from "@material-ui/core/Grid";

const XPosition = props => (
    <Grid item>
        <SliderInput
            min={0}
            max={2550}
            name="X Position"
            description={`The X position of the shape.`}
            value={props.x}
            updateValue={props.updateXPos} />
    </Grid>
);

export default XPosition;