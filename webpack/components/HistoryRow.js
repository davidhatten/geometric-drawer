import React, { Component } from 'react';
import { connect } from "react-redux";
import HistoryEditPane from "../containers/HistoryEditPane";
import { deleteShape } from "../actions/removeShapes";
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import { DragTypes, svgFromConfig } from "../shapeConstants";
import { changeHistoryOrder } from "../actions/changeHistoryOrder";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ShapeIcon from "./controls/ShapeIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteRounded";
import EditIcon from "@material-ui/icons/EditRounded";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    wrappingPaper: {
        cursor: `move`,
        margin: `3px`,
    },
    avatarPaper: {
        fontSize: `50px`,
        backgroundColor: `white`,
        borderRadius: `30px`,
    },
    avatar: {
        width: 50,
        height: 50,
        margin: 0,
    },
    editButton: {
        marginLeft: 15,
        marginRight: 15,
    },
};

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
        this.rowRef = React.createRef();
    }
    render() {
        let shape = this.props.historyData[this.props.shapeId];
        const { connectDragSource, connectDropTarget } = this.props;

        return connectDragSource(
            connectDropTarget(
                <div>
                    <Paper elevation={3} className={this.props.classes.wrappingPaper}>
                        <ListItem dense={true} extra={<img height={40} width={40} src={svgFromConfig(shape.config)} />}>
                            <Paper elevation={5} className={this.props.classes.avatarPaper}>
                                <ListItemAvatar>
                                    <Avatar className={this.props.classes.avatar}>
                                        <ShapeIcon svg={svgFromConfig(shape.config)} />
                                    </Avatar>
                                </ListItemAvatar>
                            </Paper>
                            <ListItemText primary={shape.name} />
                            <HistoryEditPane shapeId={shape.id} anchorRef={this.rowRef}/>
                            <ListItemSecondaryAction>
                                <IconButton onClick={this.props.deleteShape(this.props.shapeId)} color={`secondary`}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Paper>
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


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DragSource(DragTypes.HISTORY_CARD, cardSource, sourceConnect)(DropTarget(DragTypes.HISTORY_CARD, cardTarget, targetConnect)(HistoryRow))));