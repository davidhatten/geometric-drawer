import React from 'react';
import SliderInput from "../controls/SliderInput";
import { standardSquareLength } from "../../shapeConstants";
import {FormGroup} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const SquareForm = (props) => (
    <React.Fragment>
        <Grid item>
            <SliderInput
                min={standardSquareLength.min}
                max={standardSquareLength.max}
                name={standardSquareLength.name}
                description={`The side length of the square.`}
                value={props.length}
                updateValue={props.updateLength}
            />
        </Grid>
        <Grid item>
            <SliderInput
                min={0}
                max={360}
                name={`Rotation`}
                description={`The rotation of the square.`}
                value={props.rotation}
                updateValue={props.updateRotation}
            />
        </Grid>
    </React.Fragment>
);

export default SquareForm;