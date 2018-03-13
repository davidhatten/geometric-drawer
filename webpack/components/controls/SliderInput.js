import React, { Component } from 'react';
import { Col, Form, InputNumber, Row, Slider, Tooltip } from "antd";

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
            <FormItem label={<Tooltip title={this.props.description}>{this.props.name}</Tooltip>}>
                <Row>
                    <Col span={18}>
                        <Slider min={this.props.min} max={this.props.max} value={this.props.value}
                            onChange={this.onChange}/>
                    </Col>
                    <Col span={1}>
                        {/*Empty spacer*/}
                    </Col>
                    <Col>
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
