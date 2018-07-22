//@flow
import React from 'react';
import ChoiceList from './ChoiceList';
import type { ChoiceType } from '../schema';

type Props = {
  choices: Array<ChoiceType>,
  currentChoiceId: string,
  addNewChoice: () => void,
  updateChoice: (q: ChoiceType) => void
};

const MultipleChoiceContainer = (props: Props) => {
  const { choices, currentChoiceId, updateChoice } = props;
  return (
    <div>
      <ChoiceList
        choices={choices}
        currentChoiceId={currentChoiceId}
        updateChoice={updateChoice}
      />
    </div>
  );
};

export default MultipleChoiceContainer;
