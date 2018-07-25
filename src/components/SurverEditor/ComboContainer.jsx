//@flow
import React from 'react';
import type { QuestionType, ComboType, ChoiceType } from './models/schema';
import ComboList from './ComboList';
import AddNewQuestion from './AddNewQuestion';

type Props = {
  combos: Array<ComboType>,
  choices: Array<ChoiceType>,
  currentComboId: string,
  initializeNewCombo: () => void,
  saveCombo: (combo: ComboType) => void,
  updateCombo: (comboId: string, propName: string, propValue: string) => void,
  editCombo: (comboId: string) => void,
  deleteCombo: (comboId: string) => void,
  updateQuestion: (id: string, q: QuestionType) => void
};

const ComboContainer = (props: Props) => {
  const {
    combos,
    choices,
    currentComboId,
    initializeNewCombo,
    updateQuestion,
    saveCombo,
    updateCombo,
    editCombo,
    deleteCombo
  } = props;

  const updatedCombos: Array<ComboType> = combos.map(c => {
    if (c.id !== currentComboId) {
      return c;
    } else {
      return { ...c, options: { ...c.options, value: choices } };
    }
  });

  return (
    <div>
      <ComboList
        combos={updatedCombos}
        current={currentComboId}
        updateQuestion={updateQuestion}
        updateCombo={updateCombo}
        saveCombo={saveCombo}
        editCombo={editCombo}
        deleteCombo={deleteCombo}
      />
      <AddNewQuestion add={initializeNewCombo} saveCombo={saveCombo} />
    </div>
  );
};

export default ComboContainer;
