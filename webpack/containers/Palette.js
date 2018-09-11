import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'antd';
import PaletteHeader from '../components/PaletteHeader';
import { configMap } from '../shapeConstants';
import { selectShape } from '../actions/selectShape';
import styles from './Palette.scss';
import GeneralOptions from '../components/GeneralOptionsConfig';


const Panel = Collapse.Panel;

class Palette extends Component {
    constructor(props) {
        super(props);
    }
    generatePanel = (config) => {
        const configInfo = configMap[config];
        const ShapeOptions = connect(configInfo.paletteStateToProps, configInfo.paletteDispatchToProps)(configInfo.form);
        return (
            <Panel className={styles.palettePanel} showArrow={false} key={config} header={<PaletteHeader
                name={configInfo.name}
                img={configInfo.img}
                description={configInfo.description}/>}>
                <ShapeOptions />
                <GeneralOptions />
            </Panel>
        );
    }
    render() {
        const panels = [];
        for (let configKey in configMap) {
            panels.push(this.generatePanel(configKey));
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
