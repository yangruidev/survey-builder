//@flow
import React from 'react';
import type { QuestionType, ComboType, ChoiceType } from './models/schema';
import ComboList from './ComboList';
import AddNewQuestion from './AddNewQuestion';
import { updateChoice, removeChoice } from './buildActions';

type Props = {
  combos: Array<ComboType>,
  currentComboId: string,
  initializeNewCombo: () => void,
  initializeNewChoice: () => void,
  updateCombo: (propName: string, propValue: string) => void,
  updateChoice: (choice: ChoiceType) => void,
  editCombo: (comboId: string) => void,
  deleteCombo: (comboId: string) => void,
  removeChoice: (choiceId: string) => void,
  updateQuestion: (question: QuestionType) => void
};

const ComboContainer = (props: Props) => {
  const { initializeNewCombo } = props;

  return (
    <div>
      <ComboList {...props} />
      <AddNewQuestion add={initializeNewCombo} />
    </div>
  );
};

export default ComboContainer;
