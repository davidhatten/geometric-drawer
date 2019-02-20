import React, { Component } from 'react';
import { connect } from 'react-redux';
import { configMap } from '../shapeConstants';
import { selectShape } from '../actions/selectShape';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
import ShapeIcon from "../components/controls/ShapeIcon";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

const styles = {
    root: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `flex-end`,
        flexWrap: `wrap`,
        padding: `8px`,
        borderRadius: `10px`,
    },
    radioButton: {
        padding: `0px`,
        borderRadius: `20px`,
    },
    radioPaper: {
        padding: `2px`,
        margin: `4px`,
        borderRadius: `30px`,
    },
};

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
            <Paper className={this.props.classes.radioPaper} elevation={3}><Radio
                className={this.props.classes.radioButton}
                onChange={this.selectShape}
                checked={this.state.selectedValue === configKey}
                name={`palette-select-button`}
                value={configKey}
                icon={<ShapeIcon svg={configInfo.iconSvg}/>}
                checkedIcon={<ShapeIcon checked svg={configInfo.iconSvg}/>}
            /></Paper>
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

        return (<Paper elevation={1} className={this.props.classes.root}>{buttons}</Paper>);
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Palette));
