import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'antd';
const TimeItem = Timeline.Item;

class History extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Timeline>
                <TimeItem>This was the first thing drawn</TimeItem>
                <TimeItem>This was the second thing drawn</TimeItem>
                <TimeItem color="red">This is an item that is in preview</TimeItem>
            </Timeline>
        );
    }

}

export default History;