import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import HistoryRow from '../components/HistoryRow';
import { changeHistoryStyle } from "../actions/changeHistoryProp";
import { DropTarget } from 'react-dnd';

const TimeItem = Timeline.Item;

const historyCardTarget = {
    canDrop(props, monitor) {

    },
    hover(props, monitor, component) {

    },
    drop(props, monitor, component) {

    },
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType(),
    }
}

class History extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { history } = this.props;

        const historyItems = history.map((shapeId, index) =>
            <TimeItem key={index} onMouseEnter={this.props.highlightShape(shapeId)} onMouseLeave={this.props.unhighlightShape(shapeId)}>
                <HistoryRow shapeId={shapeId} />
            </TimeItem>
        );
        return this.props.connectDropTarget(
            <Timeline>
                {historyItems}
            </Timeline>
        );
    }

}

const mapStateToProps = state => ({
    history: state.shapeHistory.allIds,
});

const mapDispatchToProps = dispatch => ({
    highlightShape: id => () => {dispatch(changeHistoryStyle(id, `stroke`, `red`));},
    unhighlightShape: id => () => {dispatch(changeHistoryStyle(id, `stroke`, `black`));},
});

export default DropTarget(HistoryRow.Types.HISTORY_CARD, historyCardTarget, collect)(connect(mapStateToProps, mapDispatchToProps)(History));