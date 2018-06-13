import React  from 'react';
import {RECTANGLE_CONFIG } from '../../shapeConstants';
import { connect } from 'react-redux';

import {changeRectangleConfig} from "../../actions/changeRectangleConfig";
import RectangleForm from "../../components/forms/RectangleForm";

const mapStateToProps = state => ({
    height: state[RECTANGLE_CONFIG].height,
    width: state[RECTANGLE_CONFIG].width,
    rotation: state[RECTANGLE_CONFIG].rotation,
});

const mapDispatchToProps = dispatch => ({
    updateHeight: (value) => {dispatch(changeRectangleConfig(`height`, parseInt(value)));},
    updateWidth: (value) => {dispatch(changeRectangleConfig(`width`, parseInt(value)));},
    updateRotation: (value) => {dispatch(changeRectangleConfig(`rotation`, parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(RectangleForm);
