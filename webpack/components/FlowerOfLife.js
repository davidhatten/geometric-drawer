// @flow

import React, { Component } from 'react';

type Props = {
    locationData: {},
    style: {},
};

class FlowerOfLife extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    drawFlower = () => {
        const innerPetals = [];
        innerPetals.push(<circle {...this.props.locationData} {...this.props.style} />);

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
