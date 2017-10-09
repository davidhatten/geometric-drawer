import React  from 'react';
import { connect } from 'react-redux';
import { CIRCLE_CONFIG } from '../../shapeConstants';
import { changeCircleConfig } from '../../actions/changeCircleConfig';
import CircleForm from "../../components/forms/CircleForm";

const mapStateToProps = state => ({
    radius: state[CIRCLE_CONFIG].radius,
});

const mapDispatchToProps = dispatch => ({
    updateRadius: (value) => {dispatch(changeCircleConfig(`radius`, parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(CircleForm);
