import React from 'react';
import RoundedPetalForm from "../../components/forms/RoundedPetalForm";
import { connect } from "react-redux";
import { ROUNDED_PETAL_CONFIG } from "../../shapeConstants";
import {
    changeAxes, changeInnerGap, changeInnerRadius, changeOuterGap, changeOuterRadius,
    changeXControl, changeYControl
} from "../../actions/changeRoundedPetalConfig";

const mapStateToProps = state => ({
    innerRadius: state[ROUNDED_PETAL_CONFIG].innerRadius,
    outerRadius: state[ROUNDED_PETAL_CONFIG].outerRadius,
    xControl: state[ROUNDED_PETAL_CONFIG].xControl,
    yControl: state[ROUNDED_PETAL_CONFIG].yControl,
    axes: state[ROUNDED_PETAL_CONFIG].axes,
    innerGap: state[ROUNDED_PETAL_CONFIG].innerGap,
    outerGap: state[ROUNDED_PETAL_CONFIG].outerGap,
    rotation: state[ROUNDED_PETAL_CONFIG].rotation,
});

const mapDispatchToProps = dispatch => ({
    updateInnerRadius: value => {dispatch(changeInnerRadius(parseInt(value)));},
    updateOuterRadius: value => {dispatch(changeOuterRadius(parseInt(value)));},
    updateXControl: value => {dispatch(changeXControl(parseInt(value)));},
    updateYControl: value => {dispatch(changeYControl(parseInt(value)));},
    updateAxes: value => {dispatch(changeAxes(parseInt(value)));},
    updateInnerGap: value => {dispatch(changeInnerGap(parseInt(value)));},
    updateOuterGap: value => {dispatch(changeOuterGap(parseInt(value)));},
    updateRotation: value => {dispatch(changeRotation(parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundedPetalForm);