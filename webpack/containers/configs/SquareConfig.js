import React  from 'react';
import { SQUARE_CONFIG } from '../../shapeConstants';
import { connect } from 'react-redux';

import { changeSquareConfig } from '../../actions/changeSquareConfig';
import SquareForm from "../../components/forms/SquareForm";

const mapStateToProps = state => ({
    length: state[SQUARE_CONFIG].length,
    rotation: state[SQUARE_CONFIG].rotation,
});

const mapDispatchToProps = dispatch => ({
    updateLength: (value) => {dispatch(changeSquareConfig(`length`, parseInt(value)));},
    updateRotation: (value) => {dispatch(changeSquareConfig(`rotation`, parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(SquareForm);
