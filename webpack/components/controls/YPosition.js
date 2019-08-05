import React from 'react';
import SliderInput from "./SliderInput";
import {Grid} from "@material-ui/core";

const YPosition = props => (
    <Grid item>
        <SliderInput
            min={0}
            max={2550}
            name="Y Position"
            description={`The Y position of the shape.`}
            value={props.y}
            updateValue={props.updateYPos} />
    </Grid>
);

export default YPosition;