import React from 'react';
import RoundedPetalForm from "../../components/forms/RoundedPetalForm";
import { connect } from "react-redux";
import { ROUNDED_PETAL_CONFIG } from "../../shapeConstants";
import {
    changeAxes, changeInnerRadius, changeOuterRadius,
    changeXControl, changeYControl
} from "../../actions/changeRoundedPetalConfig";

const mapStateToProps = state => ({
    innerRadius: state[ROUNDED_PETAL_CONFIG].innerRadius,
    outerRadius: state[ROUNDED_PETAL_CONFIG].outerRadius,
    xControl: state[ROUNDED_PETAL_CONFIG].xControl,
    yControl: state[ROUNDED_PETAL_CONFIG].yControl,
    axes: state[ROUNDED_PETAL_CONFIG].axes,
});

const mapDispatchToProps = dispatch => ({
    updateInnerRadius: value => {dispatch(changeInnerRadius(parseInt(value)));},
    updateOuterRadius: value => {dispatch(changeOuterRadius(parseInt(value)));},
    updateXControl: value => {dispatch(changeXControl(parseInt(value)));},
    updateYControl: value => {dispatch(changeYControl(parseInt(value)));},
    updateAxes: value => {dispatch(changeAxes(parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundedPetalForm);