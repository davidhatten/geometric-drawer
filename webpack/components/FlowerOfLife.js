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

        const startCircle = { x:this.props.config.position.x, y: this.props.config.position.y };
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

        const petalElements = usedPetals.map((petal) => {
            return <circle key={`${petal.x}${petal.x}${petal.y}${petal.y}`} cx={petal.x} cy={petal.y} r="100" {...this.props.style} />;
        });
        this.setState({ petals: petalElements});
    }
    drawPetals = (radius, innerPetals, petalAngles, usedPetals) => {
        let outerPetals = [];

        for (let i = 0; i < innerPetals.length; i++) {
            for (let j = 0; j < petalAngles.length; j++) {
                const sqrX = innerPetals[i].x + radius * Math.cos(Math.PI * petalAngles[j]);
                const sqrY = innerPetals[i].y + radius * Math.sin(Math.PI * petalAngles[j]);

                const circle = { x:sqrX, y:sqrY};
                if (this.arrayContains(outerPetals, circle) === false && 
                    this.arrayContains(usedPetals, circle) === false) {
                    outerPetals.push(circle);
                }

            }
        }

        return outerPetals;
    }

    arrayContains(array, centerPoint) {
        for (let i = 0; i < array.length; i++) {
            if (this.roundFloats(array[i].x, 3) === this.roundFloats(centerPoint.x, 3) &&
                this.roundFloats(array[i].y, 3) === this.roundFloats(centerPoint.y, 3)) {
                return true;
            }
        }

        return false;
    }

    roundFloats = (float, decimalPoints) => {
        let roundingFactor = Math.pow(10, decimalPoints);
        if (this.decimalPlaces(float) > 0) {
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
