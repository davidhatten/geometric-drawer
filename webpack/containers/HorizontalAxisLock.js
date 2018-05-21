import React, { Component } from 'react';
import { Row, Form, Switch } from 'antd';
import {changeGeneralConfig} from "../actions/changeGeneralConfig";
import {connect} from "react-redux";

const FormItem = Form.Item;

class HorizontalAxisLock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Row type="flex" justify="center" align="middle">
                <FormItem labelCol={{ span: 20 }} wrapperCol={{ span: 2 }} label="Center Horizontal Axis">
                    <Switch size="small" checked={this.props.checked} onChange={this.props.toggleHorizontal} />
                </FormItem>
            </Row>
        );
    }
}


const mapStateToProp = state => ({
    checked: state.generalConfig.lockHorizontal,
});

const mapDispatchToProps = dispatch => ({
    toggleHorizontal: (checked) => {dispatch(changeGeneralConfig({lockHorizontal: checked}));},
});


export default connect(mapStateToProp, mapDispatchToProps)(HorizontalAxisLock);