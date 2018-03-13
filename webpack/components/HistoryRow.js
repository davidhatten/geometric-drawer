import React, { Component } from 'react';
import { Row, Col, Button, List } from 'antd';
import { connect } from "react-redux";
import HistoryEditPane from "../containers/HistoryEditPane";
import { deleteShape } from "../actions/removeShapes";
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import { DragTypes, imgFromConfig } from "../shapeConstants";
import { changeHistoryOrder } from "../actions/changeHistoryOrder";

const ListItem = List.Item;

const cardSource = {
    beginDrag(props) {
        return {
            id: props.shapeId,
            originalIndex: props.historyIds.indexOf(props.shapeId),
        };
    },
    endDrag(props, monitor) {
        const { id: droppedId, originalIndex } = monitor.getItem();
        const didDrop = monitor.didDrop();

        if (!didDrop) {
            props.orderShape(droppedId, originalIndex);
        }
    },
};

const cardTarget = {
    canDrop() {
        return false;
    },
    hover(props, monitor, component) {
        const { id: draggedId } = monitor.getItem();
        const { shapeId: overId } = props;

        if (draggedId !== overId) {
            const overIndex = props.historyIds.indexOf(overId);
            props.orderShape(draggedId, overIndex);
        }
    },
};


function sourceConnect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
}

function targetConnect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),

    };
}

class HistoryRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let shape = this.props.historyData[this.props.shapeId];
        const { connectDragSource, connectDropTarget } = this.props;

        return connectDragSource(
            connectDropTarget(
                <div>
                    <ListItem className="historyRow" extra={<img height={40} width={40} src={imgFromConfig(shape.config)} />}>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col span={12}>
                                {shape.name}
                            </Col>
                            <Col span={6}>
                                <HistoryEditPane shapeId={this.props.shapeId} />
                            </Col>
                            <Col span={6}>
                                <Button type="danger" onClick={this.props.deleteShape(this.props.shapeId)}>Delete</Button>
                            </Col>
                        </Row>
                    </ListItem>
                </div>
            ));
    }
}

const mapStateToProps = state => ({
    historyData: state.shapeHistory.byId,
    historyIds: state.shapeHistory.allIds,
});

const mapDispatchToProps = dispatch => ({
    deleteShape: (id) => () => {dispatch(deleteShape(id));},
    orderShape: (id, index) => {dispatch(changeHistoryOrder(id, index));},
});


export default connect(mapStateToProps, mapDispatchToProps)(DragSource(DragTypes.HISTORY_CARD, cardSource, sourceConnect)(DropTarget(DragTypes.HISTORY_CARD, cardTarget, targetConnect)(HistoryRow)));