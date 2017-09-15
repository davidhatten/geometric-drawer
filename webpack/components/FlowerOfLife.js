import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlowerOfLife extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    drawFlower = () => {
        const innerPetals = [];
        const angleDegrees = [];
        const petalCount = 6;
        const degrees = 360/petalCount;
        var trackDegrees = 0;
        const jsRotation = 1/petalCount;
        console.log(this.props);
        innerPetals.push(<circle cx={this.props.config.position.x} cy={this.props.config.position.y} r="100" {...this.props.style} />);

        // Splitting the degrees, then rotate it by that after
        for (let i = 0; i < petalCount; i++) {
            trackDegrees = trackDegrees + degrees;
            angleDegrees.push(((trackDegrees)/180) + jsRotation);
        }

        let outerPetals = innerPetals.slice();
        let usedPetals = innerPetals.slice();
        for (let i = 0; i < this.props.config.iterations; i++) {
            outerPetals = this.drawPetals(`100`, this.props.config.style, outerPetals, angleDegrees, usedPetals);
            usedPetals = usedPetals.concat(outerPetals);
        }

        console.log(usedPetals);

        return usedPetals;
    }
    drawPetal = (radius, style, innerPetals, petalAngles, usedPetals) => {
        let outerPetals = [];

        for (let i = 0; i < innerPetals.length; i++) {
            for (let j = 0; j < petalAngles.length; j++) {
                const sqrX = innerPetals[i].x + radius * Math.cos(Math.PI * petalAngles[j]);
                const sqrY = innerPetals[i].y + radius * Math.sin(Math.PI * petalAngles[j]);

            }
        }
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
