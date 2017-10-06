import React, { Component } from 'react';
import circlePoint from 'point-on-circle';
import twirl from "twirl";
import SvgPath from 'path-svg/svg-path';

class RoundedPetal extends Component {
    constructor(props) {
        super(props);
    }
    drawSinglePetal = (innerPoint, outerPoint, leftControlPoint, rightControlPoint) => {
        const path = SvgPath().to(innerPoint)
            .bezier2(leftControlPoint, outerPoint);

        console.log(`RoundedPetal - Drew a path object? `, path);
        console.log(`RoundedPetal - path string? `, path.str());
    }
    render() {
        console.log(`RoundedPetal - render`, this.props);
        const { axes, innerRadius, outerRadius, x, y } = this.props;
        // Some of these don't make sense yet.
        // Most of this will be user input
        const yControlPoint = 100;
        const xControlPoint = 150;
        let angle = 0;
        const maxAngle = 360 + angle;
        const angleIncrement = 360/axes;
        const result = [];
        const angleInRads = (Math.PI/180)*angle;
        const centerPoint = { x: x, y: y };
        /*
        This is roundabout enough to be worth explaining.
        The overall algorithm here is to calculate a petal at the 0 angle line,
        and then rotate a copy of all the points to the proper angle until you have enough petals.

        This proved MUCH simpler than trying to make this calculation at every angle.
        I have made NO attempts to determine if this is more efficient than the alternatives
        I do not intend to consider those alternatives until I see a performance problem
         */

        // Get a point at the 0 degrees line, in JS that's x slope = 0 where positive is to the right
        const innerPoint = circlePoint({ x: x + innerRadius, y: y + innerRadius }, centerPoint, angleInRads);
        const outerPoint = circlePoint({ x: x + outerRadius, y: y + outerRadius }, centerPoint, angleInRads);

        /*
        I didn't properly document this when I originally wrote it.
        Therefore, I can't explain why the control point inputs are mapped opposite to what they seem they should be
        But this is correct. Trust it.

        The strange addition and subtraction is because of the way that JS defines 0 degrees
        */
        const leftControlPoint = { x: innerPoint.x + yControlPoint, y: innerPoint.y - xControlPoint };
        const rightControlPoint = { x: innerPoint.x + yControlPoint, y: innerPoint.y + xControlPoint };

        while (angle < maxAngle) {
            result.push(this.drawSinglePetal(
                // You're using rotate wrong, silly
                twirl.rotate(angle, innerPoint),
                twirl.rotate(angle, outerPoint),
                twirl.rotate(angle, leftControlPoint),
                twirl.rotate(angle, rightControlPoint),
            ));

            angle += angleIncrement;
        }

        return (
            <circle r="200" cx={this.props.x} cy={this.props.y} {...this.props.style} />
        );

    }
}

export default RoundedPetal;