import React from 'react';
import SliderInput from "../controls/SliderInput";
import {Grid} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";

const CirclePetalForm = props => (
    <FormGroup>
        <Grid container spacing={3}>
            <Grid item>
                <SliderInput
                    min={1}
                    max={1500}
                    name={`Ring Radius (px)`}
                    description={`Radius of the ring on which the petals are drawn.`}
                    value={props.ringRadius}
                    updateValue={props.updateRingRadius} />
            </Grid>
            <Grid item>
                <SliderInput
                    min={1}
                    max={500}
                    name={`Petal Radius (px)`}
                    description={`Radius of the petals.`}
                    value={props.petalRadius}
                    updateValue={props.updatePetalRadius} />
            </Grid>
            <Grid item>
                <SliderInput
                    min={0}
                    max={360}
                    name={`Rotation (degrees)`}
                    description={`Rotate the ring by a set amount of degrees.`}
                    value={props.rotation}
                    updateValue={props.updateRotation} />
            </Grid>
            <Grid item>
                <SliderInput
                    min={1}
                    max={36}
                    name={`Axes`}
                    description={`Number of axes to draw the petals on.`}
                    value={props.axes}
                    updateValue={props.updateAxes} />
            </Grid>
        </Grid>
    </FormGroup>
);

export default CirclePetalForm;