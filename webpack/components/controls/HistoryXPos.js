import React from 'react';
import { Col, Form, Row } from 'antd';
import SliderInput from "./SliderInput";

const HistoryXPos = props => (
    <Row type="flex" justify="space-around">
        <Col span={24}>
            <SliderInput
                min={0}
                max={2550}
                name="X Position"
                description={`The X position of the shape.`}
                value={props.x}
                updateValue={props.updateXPos} />
        </Col>
    </Row>
);

export default HistoryXPos;