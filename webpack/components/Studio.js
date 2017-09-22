import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import Palette from './Palette';
import Canvas from './Canvas';
import History from './History';
import HelloButton from './HelloButton';
import Message from './Message';
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
                    <Col lg={6} md={6} sm={6}>
                        <h2>Drawing History</h2>
                        <hr />
                        <br />
                        <History />
                    </Col>
                    <Col lg={10} md={10} sm={10}>
                        <h2>Drawing Canvas</h2>
                        <hr />
                        <br />
                        <ReactCursorPosition>
                            <Canvas
                                shapeConfig={this.state.shapeConfig}/>
                        </ReactCursorPosition>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <h2>Drawing Options</h2>
                        <hr />
                        <br />
                        <Palette
                            onShapeChange={this.updateShapeToDraw}/>
                        <br />
                        <Button type="primary" onClick={this.exportCanvas}>Export Canvas</Button>
                        <HelloButton />
                        <Message />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Studio;
