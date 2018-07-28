//@flow
import React from 'react';
import type { QuestionType, ComboType, ChoiceType } from './models/schema';
import DismissButton from '../Base/DismissButton';
import Button from '../Base/Button';
import ButtonGroup from '../Base/ButtonGroup';

type Props = {
  render: Object => any,
  isCurrent: boolean,
  combo: ComboType,
  initializeNewChoiceUnder: (id: string) => void,
  updateCombo: (propName: string, propValue: string) => void,
  updateChoice: (choice: ChoiceType) => void,
  editCombo: (comboId: string) => void,
  deleteCombo: (comboId: string) => void,
  removeChoice: (choiceId: string) => void,
  updateQuestion: (question: QuestionType) => void
};

const ComboContainer = (props: Props) => {
  const {
    render,
    combo,
    deleteCombo,
    editCombo,
    isCurrent,
    ...functions
  } = props;

  return (
    <div className="well is-light">
      {render({ ...combo, ...functions, isCurrent })}
      <ButtonGroup customClass="top-right-corner">
        {isCurrent ? null : (
          <Button
            type="warning"
            size="small"
            text="Edit"
            handleClick={() => editCombo(combo.id)}
          />
        )}
        <DismissButton handleClick={() => deleteCombo(combo.id)} />
      </ButtonGroup>
    </div>
  );
};

export default ComboContainer;
