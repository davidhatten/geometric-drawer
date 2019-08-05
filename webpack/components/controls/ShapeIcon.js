import React, { Component } from 'react';
import SvgIcon from "@material-ui/core/SvgIcon";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    unchecked: {
        fontSize: `50px`,
        backgroundColor: `white`,
        borderRadius: `30px`,
        '&:first-child': { // reach in into the object into the svg and set the style
            fill: `none`,
            stroke: `black`,
            strokeWidth: `60`,
            strokeLinecap: `round`,
        },
    },
    checked: {
        fontSize: `50px`,
        backgroundColor: `black`,
        borderRadius: `30px`,
        '&:first-child': {
            fill: `none`,
            stroke: `white`,
            strokeWidth: `75`, // This is deliberately different from the unchecked strokeWidth
            strokeLinecap: `round`,

        },
    },

};

const ShapeIcon = props => (
    // Note the style anti-pattern in the svg and svg child elements. This will make theming annoying af

    // this.props.svg.className = this.props.checked ? this.props.classes.checked : this.props.classes.unchecked;

    //{React.cloneElement(this.props.svg, this.props.checked ? styles.checked : styles.unchecked)}
    <SvgIcon

        // fontSize={`large`}
        className={ props.checked ? props.classes.checked : props.classes.unchecked}
        viewBox={`0 0 2400 2400`}
        shapeRendering={`geometricPrecision`}
        component={(svgProps) => (
            <svg {...svgProps} />
        )}
    >
        {props.svg}
    </SvgIcon>

);

export default withStyles(styles)(ShapeIcon);