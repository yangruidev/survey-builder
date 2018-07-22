//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { QuestionType } from '../../models/Schema';
import { addNewQuestion, updateQuestion } from '../../actions/buildSurvey';
import ComboContainer from '../Lib/ComboContainer';

const mapStateToProps = state => {
  const { combos, currentComboId } = state.buildReducer;

  return {
    combos,
    currentComboId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewQuestion: () => {
      dispatch(addNewQuestion());
    },
    updateQuestion: (question: QuestionType) => {
      dispatch(updateQuestion(question));
    }
  };
};

const New = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComboContainer);

export default New;
