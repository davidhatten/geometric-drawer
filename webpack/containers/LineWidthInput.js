import { connect } from "react-redux";
import { changeGeneralConfig } from "../actions/changeGeneralConfig";
import LineWidth from "../components/controls/LineWidth";

const mapStateToProps = state => ({
    lineWidth: state.generalConfig.strokeWidth,
});

const mapDispatchToProps = dispatch => ({
    updateLineWidth: (event) => {dispatch(changeGeneralConfig({ strokeWidth: parseInt(event) }));},
});

export default connect(mapStateToProps, mapDispatchToProps)(LineWidth);