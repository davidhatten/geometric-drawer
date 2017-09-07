import React, { Component } from 'react';
import { Grid, Accordion } from 'semantic-ui-react';

class Studio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const accStyle = {
            margin: `0px 15px`,
        };
        return (
            <div>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <svg></svg>
                        </Grid.Column>
                        <Grid.Column>
                            <Accordion styled>
                                <Accordion.Title>
                                    Flower of Life
                                </Accordion.Title>
                                <Accordion.Content>
                                    Flower of life options would go here
                                </Accordion.Content>
                                <Accordion.Title>
                                    Metatron's Cube
                                </Accordion.Title>
                                <Accordion.Content>
                                    metatron's cube options would go here
                                </Accordion.Content>
                            </Accordion>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            );
    }

}

export default Studio;