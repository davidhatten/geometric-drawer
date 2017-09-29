import { connect } from "react-redux";
import SliderInput from "../../../components/SliderInput";
import { FOL_CONFIG } from "../../../shapeConstants";
import { changeFOLConfig } from "../../../actions/changeFOLConfig";

const mapStateToProps = state => ({
    value: state.shapeConfig[FOL_CONFIG].radius,
    min: 1,
    max: 1000,
    name: `Radius`,
});

const mapDispatchToProps = dispatch => ({
    updateValue: (value) =>{dispatch(changeFOLConfig({ radius: parseInt(value) }));},
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderInput);