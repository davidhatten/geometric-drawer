import React, { Component } from 'react';
import { connect } from "react-redux";

const Circle = props => (
    <circle cx={props.x} cy={props.y} r={props.radius} style={props.styleProps[props.style]}/>
);

const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(Circle);
