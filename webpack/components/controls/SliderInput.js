import React, { Component } from 'react';
import { Col, Form, InputNumber, Row, Slider, Tooltip } from "antd";
import './SliderInput.scss';

const FormItem = Form.Item;

class SliderInput extends Component {
    constructor(props) {
        super(props);
        this.initialValue = this.props.value;
    }

    onChange = (value) => {
        if (isNaN(parseInt(value))) {
            this.props.updateValue(this.initialValue);
        } else {
            this.props.updateValue(value);
        }
    }

    render() {
        return (
            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 15 }} label={<Tooltip title={this.props.description}>{this.props.name}</Tooltip>}>
                <Row>
                    <Col span={12}>
                        <Slider min={this.props.min} max={this.props.max} value={this.props.value}
                            onChange={this.onChange}/>
                    </Col>
                    <Col span={1}>
                        <Tooltip title={this.props.description}>
                            <InputNumber size="small" min={this.props.min} max={this.props.max} value={this.props.value}
                                formatter={value => value} onChange={this.onChange}/>
                        </Tooltip>
                    </Col>
                </Row>
            </FormItem>
        );
    }
}

export default SliderInput;
