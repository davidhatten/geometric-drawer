import React, { Component } from 'react';
import { Row, Col, Form, Input, Popover, Button } from 'antd';
import { connect } from "react-redux";
import FlowerOfLifeForm from "./forms/FlowerOfLifeForm";
import HistoryEditPane from "../containers/HistoryEditPane";
import { deleteShape } from "../actions/removeShapes";

class HistoryRow extends Component {
    constructor(props) {
        super(props);
        console.log(`HistoryRow constructor`, props);
    }
    render() {
        console.log(`HistoryRow - render()`);
        let shape = this.props.historyData[this.props.shapeId];
        return (
            <Row type="flex" justify="space-around">
                <Col>
                    {shape.name}
                </Col>
                <Col>
                    <HistoryEditPane shapeId={this.props.shapeId} />
                </Col>
                <Col>
                    <Button type="danger" onClick={this.props.deleteShape(this.props.shapeId)}>Delete</Button>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    historyData: state.shapeHistory.byId,
});

const mapDispatchToProps = dispatch => ({
    deleteShape: (id) => () => {dispatch(deleteShape(id));},
});


export default connect(mapStateToProps, mapDispatchToProps)(HistoryRow);