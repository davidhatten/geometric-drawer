import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import HistoryRow from '../components/HistoryRow';
import { changeHistoryStyle } from "../actions/changeHistoryProp";
import {DragTypes} from "../shapeConstants";
import { DropTarget } from 'react-dnd';
import './History.css';

const TimeItem = Timeline.Item;

const cardTarget = {
    drop() {},
};

function cardConnect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
    };
}

class History extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { history } = this.props;

        const historyItems = history.map((shapeId, index) =>
            <TimeItem className="historyRow" key={index} onMouseEnter={this.props.highlightShape(shapeId)} onMouseLeave={this.props.unhighlightShape(shapeId)}>
                <HistoryRow shapeId={shapeId} />
            </TimeItem>
        );

        return this.props.connectDropTarget(
            <div className="History">
                <Timeline>
                    {historyItems}
                </Timeline>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DropTarget(DragTypes.HISTORY_CARD, cardTarget, cardConnect)(History));