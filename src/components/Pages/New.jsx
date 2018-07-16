import React from 'react';
import { connect } from 'react-redux';
import { addNewQuestion } from '../../actions/buildSurvey';
import SurveyForm from '../Lib/SurveyForm';

const mapStateToProps = state => {
  return {
    questions: state.questions,
    currentQuestionId: state.currentQuestionId
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
