import { connect } from "react-redux";

export default HistoryEditPaneConent = shape => connect(shape.mapStateToProps, shape.mapDispatchToProps)(shape.formTag);
