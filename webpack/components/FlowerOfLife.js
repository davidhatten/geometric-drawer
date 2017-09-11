import React, { Component } from 'react';

class FlowerOfLife extends Component {
    constructor(props) {
        super(props);
    }
    drawFlower = () => {
        const innerPetals = [];
        const degree = 6;
        innerPetals.push(<circle {...this.props.locationData} {...this.props.style} />)

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

export default FlowerOfLife;
