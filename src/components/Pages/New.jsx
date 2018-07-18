import React from 'react';
import { connect } from 'react-redux';
import { addNewQuestion } from '../../actions/buildSurvey';
import SurveyForm from '../Lib/SurveyForm';

const mapStateToProps = state => {
  const { questions, currentQuestionId } = state.buildReducer;

  return {
    questions,
    currentQuestionId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewQuestion: () => {
      dispatch(addNewQuestion());
    }
  };
};

const New = connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyForm);

export default New;
