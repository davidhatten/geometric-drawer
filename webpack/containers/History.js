import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import HistoryRow from '../components/HistoryRow';

const TimeItem = Timeline.Item;

class History extends Component {
    constructor(props) {
        super(props);
        console.log("History", props);
    }
    render() {
        const { history } = this.props;

        const historyItems = Object.keys(history).map((shapeId, index) =>
            <TimeItem key={shapeId}>
                <HistoryRow shape={history[shapeId]} />
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
    history: state.shapeHistory,
});

export default connect(mapStateToProps)(History);