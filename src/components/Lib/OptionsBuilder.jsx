//@flow
import React from 'react';
import { QuestionTypeCodes } from '../../models/Constant';
import type { OptionsType } from '../../models/Schema';
import MultipleChoiceRoot from './optionBuilders/multipleChoice/MultipleChoiceRoot';
import SingleTextboxOptionBuilder from './optionBuilders/SingleTextboxOptionBuilder';

type Props = {
  type: string,
  options: OptionsType
};

const OptionsBuilder = (props: Props) => {
  const { type, options } = props;
  switch (props.type) {
    case QuestionTypeCodes.MULTIPLE_CHOICE:
      const choices = options.optionsObject ? options.optionsObject : [];
      return <MultipleChoiceRoot choices={choices} />;
    default:
      return <SingleTextboxOptionBuilder />;
  }
};

export default OptionsBuilder;
