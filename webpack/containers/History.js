import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import HistoryRow from '../components/HistoryRow';

const TimeItem = Timeline.Item;

class History extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const historyItems = this.props.history.map((shape) =>
            <TimeItem key={shape.id}>
                <HistoryRow name={shape.name} />
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
    history: state.shapeHistory.history,
});

export default connect(mapStateToProps)(History);