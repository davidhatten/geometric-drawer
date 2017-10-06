import { connect } from "react-redux";
import { changeGeneralConfig } from "../actions/changeGeneralConfig";
import HistoryLineWidth from "../components/controls/HistoryLineWidth";

const mapStateToProps = state => ({
    lineWidth: state.generalConfig.strokeWidth,
});

const mapDispatchToProps = dispatch => ({
    updateLineWidth: (event) => {dispatch(changeGeneralConfig({ strokeWidth: parseInt(event) }));},
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryLineWidth);