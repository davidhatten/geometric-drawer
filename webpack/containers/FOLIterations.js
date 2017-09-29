import { connect } from "react-redux";
import SliderInput from "../components/SliderInput";
import {FOL_CONFIG} from "../shapeConstants";
import {changeFOLConfig} from "../actions/changeFOLConfig";

const mapStateToProps = state => ({
    value: state.shapeConfig[FOL_CONFIG].iterations,
    min: 1,
    max: 10,
    name: `Iterations`,
});

const mapDispatchToProps = dispatch => ({
    updateValue: (value) =>{dispatch(changeFOLConfig({iterations: parseInt(value)}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderInput);