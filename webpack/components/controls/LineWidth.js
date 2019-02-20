import React from 'react';
import Row from 'antd/lib/row';
import 'antd/lib/row/style';
import Col from 'antd/lib/col';
import 'antd/lib/col/style';
import SliderInput from "./SliderInput";
import { standardLineWidth } from "../../shapeConstants";

const LineWidth = props => (
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

export default LineWidth;