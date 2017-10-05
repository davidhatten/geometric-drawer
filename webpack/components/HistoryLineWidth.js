import React from 'react';
import { Col, Form, Row } from 'antd';
import SliderInput from "./SliderInput";
import { standardLineWidth } from "../shapeConstants";

const HistoryLineWidth = props => (
    <Row type="flex" justify="space-around">
        <Col span={24}>
            <SliderInput
                min={standardLineWidth.min}
                max={standardLineWidth.max}
                name={standardLineWidth.name}
                description={`The width of the drawn lines.`}
                value={props.lineWidth}
                updateValue={props.updateLineWidth} />
        </Col>
    </Row>
);

export default HistoryLineWidth;