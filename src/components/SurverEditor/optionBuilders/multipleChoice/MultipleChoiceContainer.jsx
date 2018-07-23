//@flow
import React from 'react';
import ChoiceList from './ChoiceList';
import type { ChoiceType } from '../../models/schema';

type Props = {
  choices: Array<ChoiceType>,
  currentChoiceId: string,
  addNewChoice: () => void,
  updateChoice: (q: ChoiceType) => void
};

const MultipleChoiceContainer = (props: Props) => {
  const { choices, currentChoiceId, updateChoice, addNewChoice } = props;
  return (
    <div>
      <ChoiceList
        choices={choices}
        currentChoiceId={currentChoiceId}
        updateChoice={updateChoice}
      />
      <button onClick={addNewChoice}>Add</button>
    </div>
  );
};

export default MultipleChoiceContainer;
