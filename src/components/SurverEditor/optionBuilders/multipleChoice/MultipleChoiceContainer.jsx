//@flow
import React from 'react';
import ChoiceList from './ChoiceList';
import type { ChoiceType } from '../../models/schema';

type Props = {
  choices: Array<ChoiceType>,
  currentChoiceId: string,
  addNewChoice: () => void,
  updateChoice: (q: ChoiceType) => void,
  removeChoice: (id: string) => void
};

const MultipleChoiceContainer = (props: Props) => {
  const {
    choices,
    currentChoiceId,
    updateChoice,
    addNewChoice,
    removeChoice
  } = props;
  return (
    <div>
      <ChoiceList
        choices={choices}
        currentChoiceId={currentChoiceId}
        updateChoice={updateChoice}
        removeChoice={removeChoice}
      />
      <button onClick={addNewChoice}>Add</button>
    </div>
  );
};

export default MultipleChoiceContainer;
