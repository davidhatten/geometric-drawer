import React from 'react';
import { connect } from "react-redux";
import CirclePetalForm from "../../components/forms/CirclePetalForm";
import { CIRCLE_PETAL_CONFIG } from "../../shapeConstants";
import { changeCirclePetalConfig } from "../../actions/changeCirclePetalConfig";

const mapStateToProps = state => ({
    ringRadius: state[CIRCLE_PETAL_CONFIG].ringRadius,
    petalRadius: state[CIRCLE_PETAL_CONFIG].petalRadius,
    rotation: state[CIRCLE_PETAL_CONFIG].rotation,
    axes: state[CIRCLE_PETAL_CONFIG].axes,
});

const mapDispatchToProps = dispatch => ({
    updateRingRadius: value => {dispatch(changeCirclePetalConfig(`ringRadius`, parseInt(value)));},
    updatePetalRadius: value => {dispatch(changeCirclePetalConfig(`petalRadius`, parseInt(value)));},
    updateRotation: value => {dispatch(changeCirclePetalConfig(`rotation`, parseInt(value)));},
    updateAxes: value => {dispatch(changeCirclePetalConfig(`axes`, parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(CirclePetalForm);