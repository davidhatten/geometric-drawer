import React, { Component } from 'react';
import { Col, Form, InputNumber, Row, Slider, Tooltip } from "antd";
import './SliderInput.css';

const FormItem = Form.Item;

class SliderInput extends Component {
    constructor(props) {
        super(props);
    }

    onChange = (value) => {
        if (value) {
            this.props.updateValue(parseInt(value));
        } else {
            this.props.updateValue(parseInt(this.props.min));
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
