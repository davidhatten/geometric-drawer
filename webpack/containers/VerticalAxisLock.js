import React, { Component } from 'react';
import {changeGeneralConfig} from "../actions/changeGeneralConfig";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {FormControlLabel} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";


class VerticalAxisLock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Grid item type="flex" justify="center" align="middle">
                <FormControlLabel control={
                    <Switch size="small" checked={this.props.checked} onChange={this.props.toggleHorizontal} />
                } label="Center Vertical Axis" />
            </Grid>
        );
    }
}


const mapStateToProp = state => ({
    checked: state.generalConfig.lockVertical,
});

const mapDispatchToProps = dispatch => ({
    toggleHorizontal: (checked) => {dispatch(changeGeneralConfig({lockVertical: checked}));},
});


export default connect(mapStateToProp, mapDispatchToProps)(VerticalAxisLock);