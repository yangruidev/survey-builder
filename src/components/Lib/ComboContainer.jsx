//@flow
import React from 'react';
import type { QuestionType, ComboType } from '../../models/Schema';
import ComboList from './ComboList';
import AddNewQuestion from './AddNewQuestion';

type Props = {
  combos: Array<ComboType>,
  currentComboId: string,
  addNewQuestion: () => void,
  updateQuestion: (q: QuestionType) => void
};

const ComboContainer = (props: Props) => {
  const { combos, currentComboId, addNewQuestion, updateQuestion } = props;

  return (
    <div>
      <ComboList
        combos={combos}
        current={currentComboId}
        updateQuestion={updateQuestion}
      />
      <AddNewQuestion add={addNewQuestion} />
    </div>
  );
};

export default ComboContainer;
