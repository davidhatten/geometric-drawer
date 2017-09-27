import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import HistoryRow from './HistoryRow';

const TimeItem = Timeline.Item;

class History extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const historyItems = this.props.history.map((shape) =>
            <TimeItem key={shape.id}>{shape.name}</TimeItem>
        );
        return (
            <Timeline>
                {historyItems}
            </Timeline>
        );
    }

}

const mapStateToProps = state => ({
    history: state.drawShape.history,
});

export default connect(mapStateToProps)(History);