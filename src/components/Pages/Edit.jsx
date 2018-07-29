//@flow
import React from 'react';
import { connect } from 'react-redux';
import type {
  QuestionType,
  ComboType,
  ChoiceType
} from '../SurverEditor/models/schema';
import {
  initializeNewCombo,
  initializeNewChoiceUnder,
  updateQuestion,
  updateChoice,
  removeChoice,
  updateCombo,
  editCombo,
  deleteCombo,
  saveCombo,
  discardChange
} from '../SurverEditor/actions/buildActions';
import FormEditor from '../SurverEditor/FormEditor';

const mapStateToProps = state => {
  const { combos, currentComboId } = state.buildReducer;

  return {
    combos,
    currentComboId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initializeNewCombo: () => {
      dispatch(initializeNewCombo());
    },
    initializeNewChoiceUnder: (id: string) => {
      dispatch(initializeNewChoiceUnder(id));
    },
    updateQuestion: (question: QuestionType) => {
      dispatch(updateQuestion(question));
    },
    updateChoice: (choice: ChoiceType) => {
      dispatch(updateChoice(choice));
    },
    removeChoice: (choiceId: string) => {
      dispatch(removeChoice(choiceId));
    },
    updateCombo: (propName: string, propValue: Object) => {
      dispatch(updateCombo(propName, propValue));
    },
    editCombo: (comboId: string) => {
      dispatch(editCombo(comboId));
    },
    deleteCombo: (comboId: string) => {
      dispatch(deleteCombo(comboId));
    },
    saveCombo: () => {
      dispatch(saveCombo());
    },
    discardChange: () => {
      dispatch(discardChange());
    }
  };
};

const Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormEditor);

export default Edit;
