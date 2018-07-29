//@flow
import React from 'react';
import ChoiceList from './ChoiceList';
import type { ChoiceType } from '../../models/schema';

type Props = {
  choices: Array<ChoiceType>,
  initializeNewChoiceUnder: (id: string) => void,
  updateChoice: (q: ChoiceType) => void,
  removeChoice: (id: string) => void
};

const MultipleChoiceContainer = (props: Props) => {
  return <ChoiceList {...props} />;
};

export default MultipleChoiceContainer;
