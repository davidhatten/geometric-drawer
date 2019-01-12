import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import 'antd/lib/row/style';
import Col from 'antd/lib/col';
import 'antd/lib/col/style';
import Avatar from 'antd/lib/avatar';
import 'antd/lib/avatar/style';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style';



class PaletteHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Tooltip title={this.props.description}>
                <Row className="paletteHeaderRow" type="flex" justify="start" align="middle">
                    <Col>
                        <Avatar size="large" src={this.props.img} />
                    </Col>
                    <Col>
                        <h3 style={{margin: 0, padding: 0, fontSize: `16px`}}>{this.props.name}</h3>
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