//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { QuestionType, ComboType } from '../SurverEditor/models/schema';
import {
  invokeWithAllData,
  initializeNewCombo,
  updateQuestion,
  updateCombo,
  saveCombo,
  editCombo,
  deleteCombo
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
    initializeNewCombo: () => {
      dispatch(invokeWithAllData(initializeNewCombo));
    },
    updateQuestion: (comboId: string, question: QuestionType) => {
      dispatch(updateQuestion(comboId, question));
    },
    updateCombo: (comboId: string, propName: string, propValue: string) => {
      dispatch(updateCombo(comboId, propName, propValue));
    },
    saveCombo: (combo: ComboType) => {
      dispatch(saveCombo(combo));
    },
    editCombo: (comboId: string) => {
      dispatch(editCombo(comboId));
    },
    deleteCombo: (comboId: string) => {
      dispatch(deleteCombo(comboId));
    }
  };
};

const Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComboContainer);

export default Edit;
