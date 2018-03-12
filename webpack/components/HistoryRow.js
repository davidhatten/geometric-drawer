import React, { Component } from 'react';
import { Row, Col, Form, Input, Popover, Button } from 'antd';
import { connect } from "react-redux";
import HistoryEditPane from "../containers/HistoryEditPane";
import { deleteShape } from "../actions/removeShapes";
import { DragSource } from 'react-dnd';

export const Types = {
    HISTORY_CARD: `historyCard`,
};

const cardSource = {
    beginDrag(props) {

    },
    endDrag(props) {

    },
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
}

class HistoryRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let shape = this.props.historyData[this.props.shapeId];
        const { connectDragSource } = this.props;

        return connectDragSource(
            <div>
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    historyData: state.shapeHistory.byId,
});

const mapDispatchToProps = dispatch => ({
    deleteShape: (id) => () => {dispatch(deleteShape(id));},
});


export default DragSource(Types.HISTORY_CARD, cardSource, collect)(connect(mapStateToProps, mapDispatchToProps)(HistoryRow));