import React from 'react';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


const FillShape = props => (
    <Grid container>
        <Grid item>
            <FormControlLabel control={
                <Switch size="small" checked={props.fillShape} onChange={props.toggleFillShape} />
            } label="Fill Shape" />
        </Grid>
    </Grid>
);

export default FillShape;