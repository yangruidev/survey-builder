//@flow
import React from 'react';
import { QuestionTypeCodes } from './models/constant';
import type { OptionsType } from './models/schema';
import MultipleChoiceRoot from './optionBuilders/multipleChoice/MultipleChoiceRoot';
import SingleTextboxOptionBuilder from './optionBuilders/singleTextbox/SingleTextboxOptionBuilder';

type Props = {
  type: string,
  options: OptionsType
};

const OptionsMgr = (props: Props) => {
  const { type, options } = props;
  switch (props.type) {
    case QuestionTypeCodes.MULTIPLE_CHOICE:
      let choices = null;
      if (options.optionsObject && Array.isArray(options.optionsObject)) {
        choices = options.optionsObject;
      }
      return <MultipleChoiceRoot choices={choices} />;

    default:
      return <SingleTextboxOptionBuilder />;
  }
};

export default OptionsMgr;
