//@flow
import React from 'react';
import { connect } from 'react-redux';
import type {
  QuestionType,
  ComboType,
  ChoiceType,
  MoveType
} from '../SurveyEditor/models/schema';
import {
  initializeNewCombo,
  initializeNewChoiceUnder,
  updateQuestion,
  updateChoice,
  removeChoice,
  updateCombo,
  editCombo,
  deleteCombo,
  copyCombo,
  saveCombo,
  saveComboMove,
  launchComboModal,
  closeComboModal,
  discardChange
} from '../SurveyEditor/actions/buildActions';
import FormEditor from '../SurveyEditor/FormEditor';

const mapStateToProps = state => {
  return { ...state.buildReducer };
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
    copyCombo: (comboId: string) => {
      dispatch(copyCombo(comboId));
    },
    deleteCombo: (comboId: string) => {
      dispatch(deleteCombo(comboId));
    },
    launchComboModal: (comboId: string) => {
      dispatch(launchComboModal(comboId));
    },
    saveComboMove: (move: MoveType) => {
      dispatch(saveComboMove(move));
    },
    closeComboModal: () => {
      dispatch(closeComboModal());
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
