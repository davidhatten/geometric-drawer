import React, { Component } from 'react';
import { Col, Form, InputNumber, Row, Slider, Tooltip } from "antd";
const FormItem = Form.Item;

const validate = (value) => {
    if (value === undefined) {
        return 0;
    }

    return parseInt(value);
};

class SliderInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormItem label={<Tooltip title={this.props.description}>{this.props.name}</Tooltip>}>
                <Col span={18}>
                    <Slider min={this.props.min} max={this.props.max} value={this.props.value === `` ? this.props.min : this.props.value}
                        onChange={this.props.updateValue}/>
                </Col>
                <Col span={1}>
                    {/*Empty spacer*/}
                </Col>
                <Col>
                    <Tooltip title={this.props.description}>
                        <InputNumber size="small" min={this.props.min} max={this.props.max} value={this.props.value}
                            formatter={value => value} parser={validate} onChange={this.props.updateValue}/>
                    </Tooltip>
                </Col>
            </FormItem>
        );
    }
}

export default SliderInput;
