import React from 'react';
import { connect } from "react-redux";
import CirclePetalForm from "../../components/forms/CirclePetalForm";
import { CIRCLE_PETAL_CONFIG } from "../../shapeConstants";

const mapStateToProps = state => ({
    ringRadius: state[CIRCLE_PETAL_CONFIG].ringRadius,
    petalRadius: state[CIRCLE_PETAL_CONFIG].petalRadius,
    rotation: state[CIRCLE_PETAL_CONFIG].rotation,
    axes: state[CIRCLE_PETAL_CONFIG].axes,
});

const mapDispatchToProps = dispatch => ({
    updateRingRadius: value => {dispatch();},
    updatePetalRadius: value => {dispatch();},
    updateRotation: value => {dispatch();},
    updateAxes: value => {dispatch();},
});

export default connect(mapStateToProps, mapDispatchToProps)(CirclePetalForm);