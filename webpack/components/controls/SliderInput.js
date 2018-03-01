import React, { Component } from 'react';
import { Col, Form, InputNumber, Row, Slider, Tooltip } from "antd";
import { connect } from "react-redux";

const FormItem = Form.Item;

class SliderInput extends Component {
    constructor(props) {
        super(props);
    }

    inputOnChange = (value) => {
        if (value) {
            this.props.updateValue(value);
        } else {
            this.props.updateValue(this.props.min);
        }
    }

    render() {
        return (
            <FormItem label={<Tooltip title={this.props.description}>{this.props.name}</Tooltip>}>
                <Col span={18}>
                    <Slider min={this.props.min} max={this.props.max} value={this.props.value}
                        onChange={this.props.updateValue}/>
                </Col>
                <Col span={1}>
                    {/*Empty spacer*/}
                </Col>
                <Col>
                    <Tooltip title={this.props.description}>
                        <InputNumber size="small" min={this.props.min} max={this.props.max} value={this.props.value}
                            formatter={value => value} onChange={this.inputOnChange}/>
                    </Tooltip>
                </Col>
            </FormItem>
        );
    }
}

export default SliderInput;
