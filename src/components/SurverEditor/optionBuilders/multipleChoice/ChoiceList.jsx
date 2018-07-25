//@flow
import React from 'react';
import ChoiceBuilder from './ChoiceBuilder';
import type { ChoiceType } from '../../models/schema';

type Props = {
  choices: Array<ChoiceType>,
  currentChoiceId: string,
  updateChoice: (choice: ChoiceType) => void,
  removeChoice: (id: string) => void
};

const ChoiceList = (props: Props) => {
  const { choices, updateChoice, removeChoice } = props;
  if (choices.length > 0) {
    return (choices: any).map((c, index) => {
      return (
        <ChoiceBuilder
          key={c.id}
          choice={c}
          removeChoice={removeChoice}
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
