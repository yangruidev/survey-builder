//@flow
import React from 'react';
import type { QuestionType, ComboType, ChoiceType } from './models/schema';
import ComboList from './ComboList';
import AddNewQuestion from './AddNewQuestion';

type Props = {
  combos: Array<ComboType>,
  choices: Array<ChoiceType>,
  currentComboId: string,
  addNewQuestion: () => void,
  saveCombo: (combo: ComboType) => void,
  updateQuestion: (id: string, q: QuestionType) => void,
  updateCombo: (comboId: string, propName: string, propValue: string) => void
};

const ComboContainer = (props: Props) => {
  const {
    combos,
    choices,
    currentComboId,
    addNewQuestion,
    updateQuestion,
    saveCombo,
    updateCombo
  } = props;

  const updatedCombos = combos.map(c => {
    if (c.id !== currentComboId) {
      return c;
    } else {
      return { ...c, options: { ...c.options, optionsObject: choices } };
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
      />
      <AddNewQuestion add={addNewQuestion} saveCombo={saveCombo} />
    </div>
  );
};

export default ComboContainer;
