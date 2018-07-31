//@flow
import React from 'react';
import { QuestionTypeCodes } from '../models/constant';
import type { OptionsType, ChoiceType } from '../models/schema';
import ChoiceCollector from '../optionBuilders/multiple/ChoiceCollector';
import SingleTextboxOptionBuilder from '../optionBuilders/singleTextbox/SingleTextboxOptionBuilder';

type Props = {
  type: string,
  options: OptionsType,
  initializeNewChoiceUnder: (id: string) => void,
  updateChoice: (choice: ChoiceType) => void,
  removeChoice: (choiceId: string) => void
};

const OptionsBuilderMgr = (props: Props) => {
  const { type, options } = props;

  let choices = [];
  if (options.value && Array.isArray(options.value)) {
    choices = options.value;
  }

  switch (props.type) {
    case QuestionTypeCodes.MULTIPLE_CHOICE:
    case QuestionTypeCodes.MULTIPLE_TEXTBOX:
    case QuestionTypeCodes.CHECKBOXES:
      return (
        <ChoiceCollector
          choices={choices}
          allowRichEditor={true}
          isSingle={false}
          {...props}
        />
      );

    case QuestionTypeCodes.DROPDOWN:
      return (
        <ChoiceCollector
          choices={choices}
          allowRichEditor={false}
          isSingle={false}
          {...props}
        />
      );

    case QuestionTypeCodes.SINGLE_TEXTBOX:
      return (
        <ChoiceCollector
          choices={choices}
          allowRichEditor={true}
          isSingle={true}
          {...props}
        />
      );

    default:
      return <div>{`Question type ${props.type} is not supported yet.`}</div>;
  }
};

export default OptionsBuilderMgr;
