import React from 'react';
import SliderInput from "../controls/SliderInput";
import { standardRadius } from "../../shapeConstants";
import {Grid} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";

const FlowerOfLifeForm = (props) => (
    <FormGroup>
        <Grid item>
            <SliderInput
                min={1}
                max={10}
                name={`Iterations`}
                description={`Number of layers to build around the central circle.`}
                value={props.iterations}
                updateValue={props.updateIterations}/>
        </Grid>
        <Grid item>
            <SliderInput
                min={standardRadius.min}
                max={standardRadius.max}
                name={standardRadius.name}
                description={`The radius of each circle.`}
                value={props.radius}
                updateValue={props.updateRadius} />
        </Grid>
    </FormGroup>
);

export default FlowerOfLifeForm;