import React, { Component } from 'react';
import { Row, Col, Form, Input, Popover, Button } from 'antd';
import { connect } from "react-redux";
import FlowerOfLifeForm from "./FlowerOfLifeForm";
import HistoryEditPane from "../containers/HistoryEditPane";

class HistoryRow extends Component {
    constructor(props) {
        super(props);
        console.log(`HistoryRow constructor`, props);
    }
    shouldComponentUpdate(nextProps) {
        return false;
    }
    render() {
        console.log(`HistoryRow - render()`);
        return (
            <Row type="flex" justify="space-around">
                <Col>
                    {this.props.historyData[this.props.shapeId].name}
                </Col>
                <Col>
                    <HistoryEditPane shapeId={this.props.shapeId} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    historyData: state.shapeHistory.byId,
});



export default connect(mapStateToProps)(HistoryRow);