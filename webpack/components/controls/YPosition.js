import React from 'react';
import Row from 'antd/lib/row';
import 'antd/lib/row/style';
import Col from 'antd/lib/col';
import 'antd/lib/col/style';
import SliderInput from "./SliderInput";

const YPosition = props => (
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

export default YPosition;