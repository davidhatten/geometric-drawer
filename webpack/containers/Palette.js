import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'antd';
import PaletteHeader from '../components/PaletteHeader';
import { imgFromConfig, nameFromConfig, configMap } from '../shapeConstants';

import { selectShape } from '../actions/selectShape';

const Panel = Collapse.Panel;

class Palette extends Component {
    constructor(props) {
        super(props);
        console.log(configMap);
    }
    generatePanel = (config, description, ConfigComponent) => {
        return (
            <Panel style={{backgroundColor: '#f8f7fb'}} showArrow={false} key={config} header={<PaletteHeader
                name={nameFromConfig(config)}
                img={imgFromConfig(config)}
                description={description}/>}>
                <ConfigComponent/>
            </Panel>
        );
    }
    render() {
        const panels = [];
        for (let configKey in configMap) {
            panels.push(this.generatePanel(configKey, "lol", configMap[configKey].config));
        }
        return (
            <Collapse accordion defaultActiveKey={this.props.selectedShape} onChange={this.props.changeCurrentShape} style={ {border: `3px transparent`} }>
                {panels}
            </Collapse>
        );
    }
}

const mapStateToProps = state => ({
    selectedShape: state.selectShape.selectedShape,
});

const mapDispatchToProps = dispatch => ({
    changeCurrentShape: (key) => {dispatch(selectShape(key));},
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
