import React from 'react';
import Row from 'antd/lib/row';
import 'antd/lib/row/style';
import Col from 'antd/lib/col';
import 'antd/lib/col/style';
import SliderInput from "./SliderInput";

const XPosition = props => (
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

export default XPosition;