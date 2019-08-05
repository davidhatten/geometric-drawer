import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import {FormGroup} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";


class SliderInput extends Component {
    constructor(props) {
        super(props);
        this.initialValue = this.props.value;
    }

    onInputChange = (event) => {
        const value = event.target.value;
        this.props.updateValue(value === `` ? `` : Number(value));
        // if (isNaN(parseInt(value))) {
        //     this.props.updateValue(this.initialValue);
        // } else {
        //     this.props.updateValue(value);
        // }
    }

    onSliderChange = (event, value) => {
        this.props.updateValue(value);
    }

    render() {
        return (
            <React.Fragment>
                <Typography align="center">{this.props.name}</Typography>
                <Grid container item justify='center'>
                    <Grid item xs={10}>
                        <Slider min={this.props.min} max={this.props.max} value={this.props.value}
                            onChange={this.onSliderChange}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Input margin='dense' inputProps={{ step: 1, min: this.props.min, max: this.props.max, type: `number` }} value={this.props.value}
                            onChange={this.onInputChange}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default SliderInput;
