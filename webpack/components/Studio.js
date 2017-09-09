import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Palette from './Palette';
import Canvas from './Canvas';
import ReactCursorPosition from 'react-cursor-position';

class Studio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Row type="flex" justify="space-around">
                    <Col lg={10} md={10} sm={10}>
                        <ReactCursorPosition>  
                            <Canvas />
                        </ReactCursorPosition>
                    </Col>
                    <Col lg={10} md={10} sm={10}>
                        <Palette />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Studio;
