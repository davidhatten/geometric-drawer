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
        console.log(`I am beginning to drag`, props);
        return {
            id: props.shapeId,
            originalIndex: props.historyData[props.shapeId] };
    },
    endDrag(props, monitor) {
        const didDrop = monitor.didDrop();
        console.log(`The card was dropped`, props);

        //Call the action here
        props.orderShape(props.shapeId, 0);
    },
};

const cardTarget = {
    canDrop() {
        return false;
    },
    hover(props, monitor, component) {
        console.log(`I'm hovering`);

        // Lots of shit goes here
        // call an action to move the card around if it didn't drop I guess
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
});

const mapDispatchToProps = dispatch => ({
    deleteShape: (id) => () => {dispatch(deleteShape(id));},
    orderShape: (id, index) => {dispatch(changeHistoryOrder(id, index));},
});


export default connect(mapStateToProps, mapDispatchToProps)(DropTarget(DragTypes.HISTORY_CARD, cardTarget, targetConnect)(DragSource(DragTypes.HISTORY_CARD, cardSource, sourceConnect)(HistoryRow)));