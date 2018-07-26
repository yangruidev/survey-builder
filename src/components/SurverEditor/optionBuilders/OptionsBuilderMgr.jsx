//@flow
import React from 'react';
import { QuestionTypeCodes } from '../models/constant';
import type { OptionsType, ChoiceType } from '../models/schema';
import MultipleChoiceContainer from '../optionBuilders/multipleChoice/MultipleChoiceContainer';
import SingleTextboxOptionBuilder from '../optionBuilders/singleTextbox/SingleTextboxOptionBuilder';

type Props = {
  type: string,
  options: OptionsType,
  initializeNewChoice: () => void,
  updateChoice: (choice: ChoiceType) => void,
  removeChoice: (choiceId: string) => void
};

const OptionsBuilderMgr = (props: Props) => {
  const { type, options } = props;
  switch (props.type) {
    case QuestionTypeCodes.MULTIPLE_CHOICE:
      let choices = [];
      if (options.value && Array.isArray(options.value)) {
        choices = options.value;
      }
      return <MultipleChoiceContainer choices={choices} {...props} />;

    default:
      return <SingleTextboxOptionBuilder />;
  }
};

export default OptionsBuilderMgr;
