import React from 'react';
import {Grid} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


const FillShape = props => (
    <Grid item align="center">
        <FormControlLabel labelPlacement="top" control={
            <Switch size="small" checked={props.fillShape} onChange={props.toggleFillShape}/>
        } label="Fill Shape" />
    </Grid>
);

export default FillShape;