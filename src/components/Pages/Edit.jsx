//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { QuestionType, ComboType } from '../SurverEditor/models/schema';
import {
  addNewQuestion,
  updateQuestion,
  updateCombo,
  saveCombo
} from '../SurverEditor/buildActions';
import ComboContainer from '../SurverEditor/ComboContainer';

const mapStateToProps = state => {
  const { choices } = state.optionsReducer;
  const { combos, currentComboId } = state.buildReducer;

  return {
    combos,
    currentComboId,
    choices
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNewQuestion: () => {
      dispatch(addNewQuestion());
    },
    updateQuestion: (comboId: string, question: QuestionType) => {
      dispatch(updateQuestion(comboId, question));
    },
    updateCombo: (comboId: string, propName: string, propValue: string) => {
      dispatch(updateCombo(comboId, propName, propValue));
    },
    saveCombo: (combo: ComboType) => {
      dispatch(saveCombo(combo));
    }
  };
};

const Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComboContainer);

export default Edit;
