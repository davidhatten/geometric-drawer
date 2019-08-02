import React from 'react';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


const FillShape = props => (
    <Grid item>
        <Typography>Fill Shape</Typography>
        <Switch size="small" checked={props.fillShape} onChange={props.toggleFillShape} />
    </Grid>
);

export default FillShape;