import React  from 'react';
import { connect } from 'react-redux';
import { CIRCLE_CONFIG } from '../shapeConstants';
import { changeCircleConfig } from '../actions/changeCircleConfig';
import CircleForm from "../components/CircleForm";

const mapStateToProps = state => ({
    radius: state.shapeConfig[CIRCLE_CONFIG].radius,
});

const mapDispatchToProps = dispatch => ({
    updateRadius: (event) => {dispatch(changeCircleConfig({radius: parseInt(event.target.value)}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(CircleForm);
