import React from 'react';
import { connect } from "react-redux";
import { changeClawPetalConfig, changeInnerRadius, changeOuterRadius } from "../../actions/changeClawPetalConfig";
import ClawPetalForm from "../../components/forms/ClawPetalForm";
import { CLAW_PETAL_CONFIG } from "../../shapeConstants";

const mapStateToProps = state => ({
    innerRadius: state[CLAW_PETAL_CONFIG].innerRadius,
    outerRadius: state[CLAW_PETAL_CONFIG].outerRadius,
    xControl: state[CLAW_PETAL_CONFIG].xControl,
    yControl: state[CLAW_PETAL_CONFIG].yControl,
    axes: state[CLAW_PETAL_CONFIG].axes,
    innerGap: state[CLAW_PETAL_CONFIG].innerGap,
    outerGap: state[CLAW_PETAL_CONFIG].outerGap,
    rotation: state[CLAW_PETAL_CONFIG].rotation,
});

const mapDispatchToProps = dispatch => ({
    updateInnerRadius: value => {dispatch(changeInnerRadius(parseInt(value)));},
    updateOuterRadius: value => {dispatch(changeOuterRadius(parseInt(value)));},
    updateXControl: value => {dispatch(changeClawPetalConfig(`xControl`, parseInt(value)));},
    updateYControl: value => {dispatch(changeClawPetalConfig(`yControl`, parseInt(value)));},
    updateAxes: value => {dispatch(changeClawPetalConfig(`axes`, parseInt(value)));},
    updateInnerGap: value => {dispatch(changeClawPetalConfig(`innerGap`, parseInt(value)));},
    updateOuterGap: value => {dispatch(changeClawPetalConfig(`outerGap`, parseInt(value)));},
    updateRotation: value => {dispatch(changeClawPetalConfig(`rotation`, parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(ClawPetalForm);