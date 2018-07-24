//@flow
import React from 'react';
import { QuestionTypeCodes } from '../models/constant';
import type { OptionsType } from '../models/schema';
import MultipleChoiceRoot from '../optionBuilders/multipleChoice/MultipleChoiceRoot';
import SingleTextboxOptionBuilder from '../optionBuilders/singleTextbox/SingleTextboxOptionBuilder';

type Props = {
  type: string,
  options: OptionsType
};

const OptionsBuilderMgr = (props: Props) => {
  const { type, options } = props;
  switch (props.type) {
    case QuestionTypeCodes.MULTIPLE_CHOICE:
      let choices = null;
      if (options.value && Array.isArray(options.value)) {
        choices = options.value;
      }
      return <MultipleChoiceRoot choices={choices} />;

    default:
      return <SingleTextboxOptionBuilder />;
  }
};

export default OptionsBuilderMgr;
