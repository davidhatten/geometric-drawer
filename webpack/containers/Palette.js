import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'antd';
import PaletteHeader from '../components/PaletteHeader';
import CircleConfig from './configs/CircleConfig';
import SquareConfig from './configs/SquareConfig';
import RectangleConfig from './configs/RectangleConfig';
import FlowerOfLifeConfig from './configs/FlowerOfLifeConfig';
import PointedPetalConfig from './configs/PointedPetalConfig';
import {
    CIRCLE_CONFIG, SQUARE_CONFIG, FOL_CONFIG, FOL_NAME, CIRCLE_NAME, SQUARE_NAME,
    ROUNDED_PETAL_CONFIG, ROUNDED_PETAL_NAME, CIRCLE_PETAL_CONFIG, CIRCLE_PETAL_NAME, CURVEY_PETAL_CONFIG,
    CURVEY_PETAL_NAME, POINTED_PETAL_CONFIG, POINTED_PETAL_NAME, CLAW_PETAL_CONFIG, CLAW_PETAL_NAME, PRISM_PETAL_CONFIG,
    PRISM_PETAL_NAME, RECTANGLE_CONFIG, RECTANGLE_NAME, imgFromConfig,
} from '../shapeConstants';

import { selectShape } from '../actions/selectShape';
import RoundedPetalConfig from "./configs/RoundedPetalConfig";
import CirclePetalConfig from "./configs/CirclePetalConfig";
import CurveyPetalConfig from "./configs/CurveyPetalConfig";
import ClawPetalConfig from "./configs/ClawPetalConfig";
import PrismPetalConfig from "./configs/PrismPetalConfig";

const Panel = Collapse.Panel;

class Palette extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Collapse accordion defaultActiveKey={this.props.selectedShape} onChange={this.props.changeCurrentShape}>
                <Panel key={FOL_CONFIG} header={<PaletteHeader
                    name={FOL_NAME}
                    img="assets/img/fol_80x80.png"
                    description="A circle drawn, centered where you click, followed by layers of intersecting circles to form a flower."/>}>
                    <FlowerOfLifeConfig/>
                </Panel>
                <Panel key={CIRCLE_CONFIG} header={<PaletteHeader
                    name={CIRCLE_NAME}
                    img="assets/img/circle.png"
                    description="A simple circle. Centered on your click."/>}>
                    <CircleConfig/>
                </Panel>
                <Panel key={RECTANGLE_CONFIG} header={<PaletteHeader
                    name={RECTANGLE_NAME}
                    img={imgFromConfig(RECTANGLE_CONFIG)}
                    description="A simple rectangle. Centered on your click."/>}>
                    <RectangleConfig/>
                </Panel>
                <Panel key={SQUARE_CONFIG} header={<PaletteHeader
                    name={SQUARE_NAME}
                    img="assets/img/square.png"
                    description="A simple square. Centered on your click."/>}>
                    <SquareConfig />
                </Panel>
                <Panel key={ROUNDED_PETAL_CONFIG} header={<PaletteHeader
                    name={ROUNDED_PETAL_NAME}
                    img="assets/img/rounded_petals_80x80.png"
                    description="A ring of petals, each rounded out by gravitating towards a control point. For more info, see 'SVG Quadratic Path'"/>}>
                    <RoundedPetalConfig />
                </Panel>
                <Panel key={CURVEY_PETAL_CONFIG} header={<PaletteHeader
                    name={CURVEY_PETAL_NAME}
                    img="assets/img/curvey_petals_80x80.png"
                    description="A ring of petals, each each one rounded out by two control points. For more info, see 'SVG Bezier Curve'"/>}>
                    <CurveyPetalConfig />
                </Panel>
                <Panel key={CIRCLE_PETAL_CONFIG} header={<PaletteHeader
                    name={CIRCLE_PETAL_NAME}
                    img="assets/img/circle_petals_80x80.png"
                    description="A ring of petals, each one a small circle."/>}>
                    <CirclePetalConfig />
                </Panel>
                <Panel key={POINTED_PETAL_CONFIG} header={<PaletteHeader
                    name={POINTED_PETAL_NAME}
                    img="assets/img/pointed_petals_80x80.png"
                    description="A ring of petals, each one with lines meeting at the control points."/>}>
                    <PointedPetalConfig />
                </Panel>
                <Panel key={PRISM_PETAL_CONFIG} header={<PaletteHeader
                    name={PRISM_PETAL_NAME}
                    img="assets/img/prism_petals_80x80.png"
                    description="A ring of petals, each one with lines controlled by two control points."/>}>
                    <PrismPetalConfig />
                </Panel>
                <Panel key={CLAW_PETAL_CONFIG} header={<PaletteHeader
                    name={CLAW_PETAL_NAME}
                    img="assets/img/claw_petals_80x80.png"
                    description="A ring of petals, each one with lines controlled by a single control point."/>}>
                    <ClawPetalConfig />
                </Panel>
            </Collapse>
        );
    }
}

const mapStateToProps = state => ({
    selectedShape: state.selectShape.selectedShape,
});

const mapDispatchToProps = dispatch => ({
    changeCurrentShape: (key) => {dispatch(selectShape(key));},
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
