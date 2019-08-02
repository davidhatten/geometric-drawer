import React, { Component } from 'react';
import {changeGeneralConfig} from "../actions/changeGeneralConfig";
import {connect} from "react-redux";
import {FormControlLabel} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";


class HorizontalAxisLock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Grid item>
                <FormControlLabel control={
                    <Switch size="small" checked={this.props.checked} onChange={this.props.toggleHorizontal} />
                } label="Center Horizontal Axis" />
            </Grid>
        );
    }
}


const mapStateToProp = state => ({
    checked: state.generalConfig.lockHorizontal,
});

const mapDispatchToProps = dispatch => ({
    toggleHorizontal: (checked) => {dispatch(changeGeneralConfig({lockHorizontal: checked}));},
});


export default connect(mapStateToProp, mapDispatchToProps)(HorizontalAxisLock);