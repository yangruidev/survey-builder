import React from 'react';
import { connect } from 'react-redux';
import { fetchCombosThunk } from '../SurveyEditor/actions/buildActions';
import FormViewer from '../SurveyEditor/FormViewer';

const mapStateToProps = state => {
  return { ...state.viewReducer };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCombos: () => {
      dispatch(fetchCombosThunk());
    }
  };
};

const Preview = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormViewer);

export default Preview;
