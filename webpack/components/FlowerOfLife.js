import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string'

class FlowerOfLife extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = { petals: [] };
    }
    componentDidMount() {
        this.drawFlower();
    }
    drawFlower = () => {
        const innerPetals = [];
        const angleDegrees = [];
        const petalCount = 6;
        const degrees = 360/petalCount;
        var trackDegrees = 0;
        const jsRotation = 1/petalCount;
        console.log(this.props);

        const startCircle = <circle cx={this.props.config.position.x} cy={this.props.config.position.y} r="100" {...this.props.style} />;
        console.log("Starting circle is ", startCircle);
        innerPetals.push(startCircle);

        // Setting up the angle increment
        for (let i = 0; i < petalCount; i++) {
            trackDegrees = trackDegrees + degrees;
            angleDegrees.push(((trackDegrees)/180) + jsRotation);
        }

        let outerPetals = innerPetals.slice();
        let usedPetals = innerPetals.slice();
        for (let i = 0; i < this.props.config.iterations; i++) {
            outerPetals = this.drawPetals(`100`, outerPetals, angleDegrees, usedPetals);
            usedPetals = usedPetals.concat(outerPetals);
        }

        console.log(`There are ${usedPetals.length} petals drawn`);
        this.setState({ petals: usedPetals});
    }
    drawPetals = (radius, innerPetals, petalAngles, usedPetals) => {
        let outerPetals = [];

        for (let i = 0; i < innerPetals.length; i++) {
            for (let j = 0; j < petalAngles.length; j++) {
                const sqrX = innerPetals[i].props.cx + radius * Math.cos(Math.PI * petalAngles[j]);
                const sqrY = innerPetals[i].props.cy + radius * Math.sin(Math.PI * petalAngles[j]);

                const circle = <circle cx={sqrX} cy={sqrY} r={radius} {...this.props.style} />;
                if (this.arrayContains(outerPetals, circle) === false && 
                    this.arrayContains(usedPetals, circle) === false) {
                    outerPetals.push(circle);
                }

            }
        }

        return outerPetals;
    }
    arrayContains = (array, centerPoint) => {
        for (let i = 0; i < array.length; i++) {
            // This can't be very efficient....
            console.log(`Comparing elements ${reactElementToJSXString(array[i])} and ${reactElementToJSXString(centerPoint)}`)
            if (reactElementToJSXString(array[i]) === reactElementToJSXString(centerPoint)) {
                console.log("They are equal");
                return true;
            }
        }

        return false;
    }
    roundFloats = (float, decimalPoints) => {
        let roundingFactor = Math.pow(10, decimalPoints);
        if (decimalPlaces(float) > 0) {
            return Math.round(float * roundingFactor) / roundingFactor;
        }

        return float;
    }
    decimalPlaces(num) {
        let match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) { return 0; }
        return Math.max(
            0,
            // Number of digits right of decimal point.
            (match[1] ? match[1].length : 0)
            // Adjust for scientific notation.
            - (match[2] ? +match[2] : 0));
    }
    render() {
        return(
            <g>
                {this.state.petals}
            </g>
        );
    }

}

FlowerOfLife.propTypes = {
    config: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
};

export default FlowerOfLife;
