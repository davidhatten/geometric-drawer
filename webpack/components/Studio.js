import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import Palette from './Palette';
import Canvas from './Canvas';
import History from './History';
import ReactCursorPosition from 'react-cursor-position';
import { saveSvgAsPng } from 'save-svg-as-png';

class Studio extends Component {
    constructor(props) {
        super(props);
        this.state = {shapeConfig: {}};
    }
    updateShapeToDraw = (shapeConfig) => {
        console.log(`Studio - updateShapeToDraw `, shapeConfig);
        this.setState({
            shapeConfig: shapeConfig,
        });
    }
    exportCanvas = () => {
        const canvas = document.getElementById(`drawingCanvas`);
        saveSvgAsPng(canvas, `geometry.png`);
    }
    render() {
        return (
            <div>
                <Row type="flex" justify="space-around">
                    <Col lg={10} md={10} sm={10}>
                        <ReactCursorPosition>
                            <Canvas
                                shapeConfig={this.state.shapeConfig}/>
                        </ReactCursorPosition>
                    </Col>
                    <Col lg={13} md={13} sm={13}>
                        <Row type="flex" justify="space-around">
                            <Col lg={13} md={13} sm={13}>
                                <Palette
                                    onShapeChange={this.updateShapeToDraw}/>
                            </Col>
                            <Col lg={10} md={10} sm={10}>
                                <History />
                            </Col>                            
                        </Row>
                        <Button type="primary" onClick={this.exportCanvas}>Export Canvas</Button>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Studio;
