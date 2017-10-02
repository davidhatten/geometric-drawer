import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import HistoryRow from '../components/HistoryRow';
import { changeHistoryStyle } from "../actions/changeHistoryProp";

const TimeItem = Timeline.Item;

class History extends Component {
    constructor(props) {
        super(props);
        console.log(`History`, props);
    }
    render() {
        console.log(`History - render()`);
        const { history } = this.props;

        const historyItems = history.map((shapeId, index) =>
            <TimeItem key={index}>
                <HistoryRow shapeId={shapeId} />
            </TimeItem>
        );
        return (
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

export default connect(mapStateToProps, mapDispatchToProps)(History);