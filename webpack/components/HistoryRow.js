import React, { Component } from 'react';
import Row from 'antd/lib/row';
import 'antd/lib/row/style';
import Col from 'antd/lib/col';
import 'antd/lib/col/style';
import Button from 'antd/lib/button';
import 'antd/lib/button/style';
import List from 'antd/lib/list';
import 'antd/lib/list/style';
import { connect } from "react-redux";
import HistoryEditPane from "../containers/HistoryEditPane";
import { deleteShape } from "../actions/removeShapes";
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import { DragTypes, imgFromConfig } from "../shapeConstants";
import { changeHistoryOrder } from "../actions/changeHistoryOrder";
import styles from './HistoryRow.scss';

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
                    <ListItem style={{ padding: `4px` }} className={styles.historyRow} extra={<img height={40} width={40} src={imgFromConfig(shape.config)} />}>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col span={12}>
                                <h4 style={{margin: 0, padding: 0, fontSize: `12px`}}>{shape.name}</h4>
                            </Col>
                            <Col span={6}>
                                <HistoryEditPane shapeId={shape.id} />
                            </Col>
                            <Col span={6}>
                                <span title={`Delete`}><Button type="danger" size={`large`} icon={`delete`} onClick={this.props.deleteShape(this.props.shapeId)} /></span>
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