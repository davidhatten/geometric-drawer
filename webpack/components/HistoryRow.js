import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';


class HistoryRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row type="flex" justify="space-around">
                {this.props.name}
            </Row>
        );
    }
}

export default HistoryRow;