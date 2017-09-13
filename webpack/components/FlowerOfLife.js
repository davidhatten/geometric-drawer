import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlowerOfLife extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    drawFlower = () => {
        const innerPetals = [];
        innerPetals.push(<circle {...this.props.config} {...this.props.style} />);

        return (<circle cx="100" cy="100" r="100"/>);
    }
    render() {
        return(
            <g>
                {this.drawFlower()}
            </g>
        );
    }

}

FlowerOfLife.propTypes = {
    config: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
};

export default FlowerOfLife;
