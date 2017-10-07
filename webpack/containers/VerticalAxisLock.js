import React, { Component } from 'react';
import { Row, Form, Switch } from 'antd';
import {changeGeneralConfig} from "../actions/changeGeneralConfig";
import {connect} from "react-redux";

const FormItem = Form.Item;

class VerticalAxisLock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Row type="flex" justify="start" align="middle">
                <FormItem label="Center Vertical Axis">
                    <Switch checked={this.props.checked} onChange={this.props.toggleHorizontal} />
                </FormItem>
            </Row>
        );
    }
}


const mapStateToProp = state => ({
    checked: state.generalConfig.lockVertical,
});

const mapDispatchToProps = dispatch => ({
    toggleHorizontal: (checked) => {dispatch(changeGeneralConfig({lockVertical: checked}));},
});


export default connect(mapStateToProp, mapDispatchToProps)(VerticalAxisLock);