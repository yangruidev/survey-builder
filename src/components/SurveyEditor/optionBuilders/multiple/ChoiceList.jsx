//@flow
import React from 'react';
import ChoiceBuilder from './ChoiceBuilder';
import type { ChoiceType } from '../../models/schema';

type Props = {
  choices: Array<ChoiceType>,
  updateChoice: (choice: ChoiceType) => void,
  removeChoice: (id: string) => void,
  initializeNewChoiceUnder: (id: string) => void
};

const ChoiceList = (props: Props) => {
  const { choices, ...functions } = props;
  if (choices.length > 0) {
    return (choices: any).map((c, index) => (
      <ChoiceBuilder
        key={c.id}
        index={index}
        choice={c}
        showRemove={choices.length > 1}
        {...functions}
      />
    ));
  } else {
    return 'click to add new choice';
  }
};

export default ChoiceList;
