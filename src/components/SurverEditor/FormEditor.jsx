//@flow
import React from 'react';
import type { QuestionType, ComboType, ChoiceType } from './models/schema';
import ComboList from './ComboList';
import AddNewQuestion from './AddNewQuestion';
import { updateChoice, removeChoice } from './actions/buildActions';

type Props = {
  combos: Array<ComboType>,
  currentComboId: string,
  initializeNewCombo: () => void,
  initializeNewChoiceUnder: (id: string) => void,
  updateCombo: (propName: string, propValue: string) => void,
  updateChoice: (choice: ChoiceType) => void,
  editCombo: (comboId: string) => void,
  deleteCombo: (comboId: string) => void,
  removeChoice: (choiceId: string) => void,
  updateQuestion: (question: QuestionType) => void
};

const FormEditor = (props: Props) => {
  const { initializeNewCombo, ...functions } = props;

  return (
    <React.Fragment>
      <ComboList {...functions} />
      <AddNewQuestion add={initializeNewCombo} />
    </React.Fragment>
  );
};

export default FormEditor;
