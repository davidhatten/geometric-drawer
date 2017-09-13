import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
    constructor(props) {
        super(props);
        console.log(`Square - constructor`, props);
    }
    render() {
        return <rect {...this.props.config} {...this.props.style}/>;
    }
}

Square.propTypes = {
    config: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
};

export default Square;
