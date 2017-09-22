import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col>
                        <h1>
                            Select a style and click the canvas!
                        </h1>
                        <br />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Title;
