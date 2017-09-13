import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Row, Col } from 'antd';

class PaletteHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Row type="flex" justify="right" align="middle">
                <Col>
                    <Avatar style={{ backgroundColor: `#FFFFFF`}} size="large" src={this.props.img} />
                </Col>
                <Col>
                    {this.props.name}
                </Col>
            </Row>
        );
    }
}

PaletteHeader.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
};

export default PaletteHeader;