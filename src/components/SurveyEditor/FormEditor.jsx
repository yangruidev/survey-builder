//@flow
import React from 'react';
import type {
  QuestionType,
  ComboType,
  ChoiceType,
  MoveType
} from './models/schema';
import ComboList from './ComboList';
import AddNewQuestion from './AddNewQuestion';
import { updateChoice, removeChoice } from './actions/buildActions';

type Props = {
  combos: Array<ComboType>,
  currentComboId: string,
  currentModalComboId: string,
  isComboModalOpen: boolean,
  //combo
  initializeNewCombo: () => void,
  updateCombo: (propName: string, propValue: string) => void,
  editCombo: (comboId: string) => void,
  deleteCombo: (comboId: string) => void,
  copyCombo: (comboId: string) => void,
  saveCombo: () => void,
  launchComboModal: (comboId: string) => void,
  saveComboMove: (move: MoveType) => void,
  closeComboModal: () => void,
  //question / option
  initializeNewChoiceUnder: (id: string) => void,
  updateChoice: (choice: ChoiceType) => void,
  removeChoice: (choiceId: string) => void,
  updateQuestion: (question: QuestionType) => void,
  //general
  discardChange: () => void
};

const FormEditor = (props: Props) => {
  const { initializeNewCombo, ...rest } = props;

  return (
    <React.Fragment>
      <ComboList {...rest} />
      <div style={{ marginTop: '0.75rem' }}>
        <AddNewQuestion add={initializeNewCombo} />
      </div>
    </React.Fragment>
  );
};

export default FormEditor;
