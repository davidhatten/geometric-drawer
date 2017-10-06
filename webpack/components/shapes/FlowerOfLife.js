import React, { Component } from 'react';
import roundTo from 'round-to';

class FlowerOfLife extends Component {
    constructor(props) {
        super(props);
    }
    drawFlower = () => {
        const innerPetals = [];
        const angleDegrees = [];
        const petalCount = 6;
        const degrees = 360/petalCount;
        let trackDegrees = 0;
        const jsRotation = 1/petalCount;
        const radius = this.props.radius;

        const startCircle = { x: this.props.x, y: this.props.y };
        innerPetals.push(startCircle);

        // Setting up the angle increment
        for (let i = 0; i < petalCount; i++) {
            trackDegrees = trackDegrees + degrees;
            angleDegrees.push(((trackDegrees)/180) + jsRotation);
        }

        let outerPetals = innerPetals.slice();
        let usedPetals = innerPetals.slice();
        for (let i = 0; i < this.props.iterations; i++) {
            outerPetals = this.drawOuterPetals(radius, outerPetals, angleDegrees, usedPetals);
        }

        return usedPetals.map((petal, index) => {
            return <circle key={index} cx={petal.x} cy={petal.y} r={radius} {...this.props.style} />;
        });
    }
    drawOuterPetals = (radius, innerPetals, petalAngles, usedPetals) => {
        /*
            This method keeps track of the outermost layer of petals (circles)
            and adds to the cumulatie list of petals that will eventually be rendered

            For efficiencies sake, it attempts to track the current drawing edge
            and only iterate over those petals to draw new ones
        */
        let outerPetals = [];

        for (let i = 0; i < innerPetals.length; i++) {
            for (let j = 0; j < petalAngles.length; j++) {
                const sqrX = innerPetals[i].x + radius * Math.cos(Math.PI * petalAngles[j]);
                const sqrY = innerPetals[i].y + radius * Math.sin(Math.PI * petalAngles[j]);

                const circle = { x:sqrX, y:sqrY};

                if (this.arrayContains(usedPetals, circle) === false) {
                    outerPetals.push(circle);
                    usedPetals.push(circle);
                }

            }
        }

        return outerPetals;
    }
    arrayContains = (array, centerPoint) => {
        /*
            This method takes an array and a point and checks to see
            if that point is already in the array.

            It expects a long float that has been off by a fraction due to some math
            It rounds off everything to prevent duplicate circles from being drawn
        */
        const pointsInArray = array.filter(point => (roundTo(point.x, 3) === roundTo(centerPoint.x, 3)
                                            && roundTo(point.y, 3) === roundTo(centerPoint.y, 3)));

        return pointsInArray.length > 0;
    }
    render() {
        const petals = this.drawFlower();

        return(
            <g>
                {petals}
            </g>
        );
    }

}

export default FlowerOfLife;
