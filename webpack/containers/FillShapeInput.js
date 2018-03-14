import { connect } from 'react-redux';
import HistoryFillShape from '../components/controls/HistoryFillShape';
import { changeGeneralConfig } from "../actions/changeGeneralConfig";

const mapStateToProps = state => ({
    fillShape: state.generalConfig.fillShape,
});

const mapDispatchToProps = dispatch => ({
    toggleFillShape: (checked) => {dispatch(changeGeneralConfig({fillShape: checked}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryFillShape);