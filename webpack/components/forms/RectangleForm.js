import React from 'react';
import SliderInput from "../controls/SliderInput";
import FormGroup from "@material-ui/core/FormGroup";
import {Grid} from "@material-ui/core";

const RectangleForm = (props) => (
    <FormGroup>
        <Grid container>
            <Grid item>
                <SliderInput
                    min={0}
                    max={3000}
                    name={`Height`}
                    description={`The side height of the rectangle.`}
                    value={props.height}
                    updateValue={props.updateHeight}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={0}
                    max={4000}
                    name={`Width`}
                    description={`The side width of the rectangle.`}
                    value={props.width}
                    updateValue={props.updateWidth}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={0}
                    max={360}
                    name={`Rotation`}
                    description={`The rotation of the rectangle.`}
                    value={props.rotation}
                    updateValue={props.updateRotation}
                />
            </Grid>
        </Grid>
    </FormGroup>
);

export default RectangleForm;