//@flow
import React from 'react';
import ChoiceList from './ChoiceList';
import type { ChoiceType } from '../../models/schema';

type Props = {
  choices: Array<ChoiceType>,
  initializeNewChoice: () => void,
  updateChoice: (q: ChoiceType) => void,
  removeChoice: (id: string) => void
};

const MultipleChoiceContainer = (props: Props) => {
  const { choices, updateChoice, initializeNewChoice, removeChoice } = props;
  return (
    <div>
      <ChoiceList
        choices={choices}
        updateChoice={updateChoice}
        removeChoice={removeChoice}
      />
      <button onClick={initializeNewChoice}>Add</button>
    </div>
  );
};

export default MultipleChoiceContainer;
