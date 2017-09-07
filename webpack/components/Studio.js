import React, { Component } from 'react';
import { DatePicker } from 'antd';

class Studio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const accStyle = {
            margin: `0px 15px`,
        };
        return (
            <div>
                <DatePicker />
            </div>
            );
    }

}

export default Studio;
