import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlowerOfLife extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    drawFlower = () => {
        const innerPetals = [];
        const petalCount = 6;
        const degrees = 360/petalCount;
        var trackDegrees = 0;
        const jsRotation = 1/petalCount;

        innerPetals.push(<circle {...this.props.config} {...this.props.style} />);

        // Splitting the degrees, then rotate it by that after
        for (let i = 0; i < petalCount; i++) {
            trackDegrees = trackDegrees + degrees;
            innerPetals.push(((trackDegrees)/180) + jsRotation);
        }


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
