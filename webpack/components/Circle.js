import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Circle extends Component {
    constructor(props) {
        super(props);
        console.log(`Circle - constructor`, props);
    }
    render() {
        return <circle {...this.props.config} {...this.props.style}/>;
    }
}

Circle.propTypes = {
    config: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
};

export default Circle;
