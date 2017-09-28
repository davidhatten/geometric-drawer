import React from 'react';
import { connect } from 'react-redux';

import { writeConsole } from '../actions/consoleWrites';

const HelloButton = ({ label, handleClick }: Props) =>
    <button onClick={handleClick}>{label}</button>;

const mapStateToProps = () => ({
    label: 'Hello Button!',
});

const mapDispatchToProps = dispatch => ({
    handleClick: () => { dispatch(writeConsole("A state has changed"));},
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloButton);
