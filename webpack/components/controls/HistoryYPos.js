import React from 'react';
import { Col, Row } from 'antd';
import SliderInput from "./SliderInput";

const HistoryYPos = props => (
    <Row type="flex" justify="space-around">
        <Col span={24}>
            <SliderInput
                min={0}
                max={2550}
                name="Y Position"
                description={`The Y position of the shape.`}
                value={props.y}
                updateValue={props.updateYPos} />
        </Col>
    </Row>
);

export default HistoryYPos;