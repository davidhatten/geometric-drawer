import React from 'react';
import { connect } from 'react-redux';

const Message = ({message}) =>
    <p>{message}</p>;

const mapStateToProps = state => ({
    message: state.consoleWrites.message,
});

export default connect(mapStateToProps)(Message);
