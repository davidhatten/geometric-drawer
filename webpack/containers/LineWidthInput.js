import {connect} from "react-redux";
import SliderInput from "../components/SliderInput";
import {changeGeneralConfig} from "../actions/changeGeneralConfig";

const mapStateToProps = state => ({
    value: state.generalConfig.strokeWidth,
    min: 1,
    max: 1000,
    name: `Line Width`,
});

const mapDispatchToProps = dispatch => ({
    updateValue: (event) => {dispatch(changeGeneralConfig({strokeWidth: parseInt(event)}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderInput);