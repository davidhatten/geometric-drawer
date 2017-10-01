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

        const historyItems = history.map((shapeId, index) =>
            <TimeItem key={index}>
                <HistoryRow shape={this.props.historyData[shapeId]} />
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
    historyData: state.shapeHistory.byId,
});

export default connect(mapStateToProps)(History);