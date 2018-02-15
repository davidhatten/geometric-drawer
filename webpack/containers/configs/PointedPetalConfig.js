import React from 'react';
import { connect } from "react-redux";
import { ROUNDED_PETAL_CONFIG } from "../../shapeConstants";
import {changeInnerRadius, changeOuterRadius, changePointedPetalConfig} from "../../actions/changePointedPetalConfig";
import PointedPetalForm from "../../components/forms/PointedPetalForm";

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
    updateXControl: value => {dispatch(changePointedPetalConfig(`xControl`, parseInt(value)));},
    updateYControl: value => {dispatch(changePointedPetalConfig(`yControl`, parseInt(value)));},
    updateAxes: value => {dispatch(changePointedPetalConfig(`axes`, parseInt(value)));},
    updateInnerGap: value => {dispatch(changePointedPetalConfig(`innerGap`, parseInt(value)));},
    updateOuterGap: value => {dispatch(changePointedPetalConfig(`outerGap`, parseInt(value)));},
    updateRotation: value => {dispatch(changePointedPetalConfig(`rotation`, parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(PointedPetalForm);