import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collapse from 'antd/lib/collapse';
import 'antd/lib/collapse/style';
import Avatar from 'antd/lib/avatar';
import 'antd/lib/avatar/style';
import PaletteHeader from '../components/PaletteHeader';
import { configMap } from '../shapeConstants';
import { selectShape } from '../actions/selectShape';
import styles from './Palette.scss';
import GeneralOptions from '../components/GeneralOptionsConfig';
import RadioGroup from "antd/lib/radio/group";
import RadioButton from "antd/lib/radio/radioButton";
import "antd/lib/radio/style";


const Panel = Collapse.Panel;

class Palette extends Component {
    constructor(props) {
        super(props);
    }
    generateButton = (config) => {
        const configInfo = configMap[config];
        const ShapeOptions = connect(configInfo.paletteStateToProps, configInfo.paletteDispatchToProps)(configInfo.form);
        return (
            <RadioButton value={configInfo.name}><Avatar shape={`square`} src={configInfo.img}/></RadioButton>
        );
        // return (
        //     <Panel className={styles.palettePanel} showArrow={false} key={config} header={<PaletteHeader
        //         name={configInfo.name}
        //         img={configInfo.img}
        //         description={configInfo.description}/>}>
        //         <ShapeOptions />
        //         <GeneralOptions />
        //     </Panel>
        // );
    }
    render() {
        const buttons = [];
        for (let configKey in configMap) {
            buttons.push(this.generateButton(configKey));
        }
        return (
            <RadioGroup name={`palette`} buttonStyle={`solid`}>
                {buttons}
            </RadioGroup>

        )
        // return (
        //     <Collapse accordion defaultActiveKey={this.props.selectedShape} onChange={this.props.changeCurrentShape} style={ {border: `3px transparent`} }>
        //         {panels}
        //     </Collapse>
        // );
    }
}

const mapStateToProps = state => ({
    selectedShape: state.selectShape.selectedShape,
});

const mapDispatchToProps = dispatch => ({
    changeCurrentShape: (key) => {dispatch(selectShape(key));},
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
