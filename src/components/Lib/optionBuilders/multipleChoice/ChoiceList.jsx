//@flow
import React from 'react';
import ChoiceBuilder from './ChoiceBuilder';
import type { ChoiceType } from '../schema';

type Props = {
  choices: Array<ChoiceType>,
  currentChoiceId: string,
  updateChoice: (choice: ChoiceType) => void
};

const ChoiceList = (props: Props) => {
  const { choices, updateChoice } = props;
  if (choices.length > 0) {
    //$FlowFixMe
    return choices.map((c, index) => {
      return (
        <ChoiceBuilder
          key={c.id}
          choice={c}
          updateChoice={updateChoice}
          index={index}
        />
      );
    });
  } else {
    return 'click to add new choice';
  }
};

export default ChoiceList;
