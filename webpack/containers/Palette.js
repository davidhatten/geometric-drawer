import React, { Component } from 'react';
import { connect } from 'react-redux';
import { configMap } from '../shapeConstants';
import { selectShape } from '../actions/selectShape';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';


class Palette extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedValue: `` };
    }
    generateButton = (configKey) => {
        const configInfo = configMap[configKey];
        // const ShapeOptions = connect(configInfo.paletteStateToProps, configInfo.paletteDispatchToProps)(configInfo.form);
        // <Icon shape={`square`} src={configInfo.img} alt={configInfo.description}/></Radio>

        return (
            <Radio onChange={this.selectShape} checked={this.state.selectedValue === configKey} name={`palette-select-button`} value={configKey} checkedIcon={configInfo.checkedIcon} icon={configInfo.icon} />
        );
    }
    selectShape = (event) => {
        this.setState({ selectedValue: event.target.value });
        this.props.changeCurrentShape(event);
    }
    render() {
        const buttons = [];
        for (let configKey in configMap) {
            buttons.push(this.generateButton(configKey));
        }

        return (<div>{buttons}</div>);
        // return (
        //     <RadioGroup name={`palette`} onChange={this.props.changeCurrentShape}>
        //         {buttons}
        //     </RadioGroup>
        // );
    }
}

const mapStateToProps = state => ({
    selectedShape: state.selectShape.selectedShape,
});

const mapDispatchToProps = dispatch => ({
    changeCurrentShape: (key) => {dispatch(selectShape(key.target.value));},
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
