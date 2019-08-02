import React from 'react';
import SliderInput from "../controls/SliderInput";
import { standardRadius } from "../../shapeConstants";
import {FormGroup} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const CircleForm = (props) => (

    <FormGroup>
        <Grid container>
            <Grid item>
                <SliderInput
                    min={standardRadius.min}
                    max={standardRadius.max}
                    name={standardRadius.name}
                    description={`The radius of the circle.`}
                    value={props.radius}
                    updateValue={props.updateRadius}
                />
            </Grid>
        </Grid>
    </FormGroup>
);

export default CircleForm;