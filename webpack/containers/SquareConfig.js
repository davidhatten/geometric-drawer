import React  from 'react';
import { SQUARE_CONFIG } from '../shapeConstants';
import { connect } from 'react-redux';

import { changeSquareConfig } from '../actions/changeSquareConfig';
import SquareForm from "../components/SquareForm";

const mapStateToProps = state => ({
    length: state.shapeConfig[SQUARE_CONFIG].length,
});

const mapDispatchToProps = dispatch => ({
    updateLength: (event) => {dispatch(changeSquareConfig({length: parseInt(event.target.value)}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(SquareForm);
