import React, { Component } from 'react';
import circlePoint from 'point-on-circle';
import twirl from "twirl";
import SvgPath from 'path-svg/svg-path';
import { connect } from "react-redux";

class RoundedPetal extends Component {
    constructor(props) {
        super(props);
    }
    drawHalfPetal = (innerPoint, outerPoint, controlPoint) => {
        // This goofy array spreading is because of the rotate library
        // at least it's confined to here
        const path = SvgPath().to(...innerPoint[0])
            .bezier2(...controlPoint[0], ...outerPoint[0]);

        return path.str();
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
        const paths = [];
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
        const rightControlPoint = { x: innerPoint.x - yControlPoint, y: innerPoint.y + xControlPoint };


        const centerPointArr = Object.values(centerPoint);
        while (angle < maxAngle) {
            paths.push(this.drawHalfPetal(
                twirl.rotateZoom(angle, centerPointArr, 1, [Object.values(innerPoint)]),
                twirl.rotateZoom(angle, centerPointArr, 1, [Object.values(outerPoint)]),
                twirl.rotateZoom(angle, centerPointArr, 1, [Object.values(leftControlPoint)]),
            ));

            paths.push(this.drawHalfPetal(
                twirl.rotateZoom(angle, centerPointArr, 1, [Object.values(innerPoint)]),
                twirl.rotateZoom(angle, centerPointArr, 1, [Object.values(outerPoint)]),
                twirl.rotateZoom(angle, centerPointArr, 1, [Object.values(rightControlPoint)]),
            ));

            angle += angleIncrement;
        }

        const drawnResults = paths.map((result, index) =>
            <path key={index} d={result} {...this.props.styleProps[this.props.style]} />
        );

        return (
            <g>
                { drawnResults }
            </g>
        );

    }
}


const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(RoundedPetal);