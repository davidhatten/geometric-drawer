// @flow

import React, { Component } from 'react';

type Props = {
    locationData: {},
    style: {}
};

class Circle extends Component<Props> {
    constructor(props: Props) {
        super(props);
        console.log(`Circle - constructor`, props);
    }
    render() {
        return <circle {...this.props.locationData} {...this.props.style}/>;
    }
}

export default Circle;
