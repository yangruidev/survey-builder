//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { Question } from '../../models/Schema';
import { addNewQuestion, updateQuestion } from '../../actions/buildSurvey';
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
    },
    updateQuestion: (question: Question) => {
      dispatch(updateQuestion(question));
    }
  };
};

const New = connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyForm);

export default New;
