import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Row, Col, Tooltip } from 'antd';

class PaletteHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Tooltip title={this.props.description}>
                <Row type="flex" justify="right" align="middle">
                    <Col>
                        <Avatar style={{ backgroundColor: `#FFFFFF`}} size="large" src={this.props.img} />
                    </Col>
                    <Col>
                        {this.props.name}
                    </Col>
                </Row>
            </Tooltip>
        );
    }
}

PaletteHeader.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
};

export default PaletteHeader;