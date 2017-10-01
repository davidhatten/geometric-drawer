import React  from 'react';
import { SQUARE_CONFIG } from '../shapeConstants';
import { connect } from 'react-redux';

import { changeSideLength } from '../actions/changeSquareConfig';
import SquareForm from "../components/SquareForm";

const mapStateToProps = state => ({
    length: state[SQUARE_CONFIG].length,
});

const mapDispatchToProps = dispatch => ({
    updateLength: (value) => {dispatch(changeSideLength(parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(SquareForm);
