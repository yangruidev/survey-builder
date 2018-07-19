//@flow
import React from 'react';
import { QuestionTypeCodes } from '../../models/Constant';
import MultipleChoiceOptionBuilder from './optionBuilders/MultipleChoiceOptionBuilder';
import SingleTextboxOptionBuilder from './optionBuilders/SingleTextboxOptionBuilder';

type Props = {
  type: string
};

const OptionsBuilder = (props: Props) => {
  switch (props.type) {
    case QuestionTypeCodes.MULTIPLE_CHOICE:
      return <MultipleChoiceOptionBuilder />;
    default:
      return <SingleTextboxOptionBuilder />;
  }
};

export default OptionsBuilder;
