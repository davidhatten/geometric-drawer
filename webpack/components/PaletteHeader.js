import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";



class PaletteHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Grid container>
                <Grid item>
                    <Avatar size="large" src={this.props.img} />
                </Grid>
                <Grid item>
                    <h3 style={{margin: 0, padding: 0, fontSize: `16px`}}>{this.props.name}</h3>
                </Grid>
            </Grid>
        );
    }
}

PaletteHeader.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
};

export default PaletteHeader;