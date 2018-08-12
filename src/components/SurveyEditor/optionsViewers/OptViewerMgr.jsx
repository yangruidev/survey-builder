//@flow
import React from 'react';
import { QuestionTypeCodes } from '../models/constant';
import type { OptionsType, ChoiceType } from '../models/schema';
import MultipleChoiceViewer from '../optionsViewers/MultipleChoiceViewer';
import DropdownViewer from '../optionsViewers/DropdownViewer';
import SingleTextboxViewer from '../optionsViewers/SingleTextboxViewer';
import OptViewerContainer from './OptViewerContainer';

type Props = {
  options: OptionsType
};
const OptViewerMgr = (props: Props) => {
  const { options } = props;
  let viewer: Object;
  let choices: Array<ChoiceType> = [];
  if (options.value && Array.isArray(options.value)) {
    choices = options.value;
  }

  switch (options.type) {
    case QuestionTypeCodes.MULTIPLE_CHOICE:
      viewer = <MultipleChoiceViewer choices={choices} />;
      break;

    case QuestionTypeCodes.DROPDOWN:
      const dropdownOptions = choices.map(c => {
        return { value: c.text, text: c.text };
      });
      viewer = <DropdownViewer options={dropdownOptions} />;
      break;

    case QuestionTypeCodes.SINGLE_TEXTBOX:
      viewer = <SingleTextboxViewer />;
      break;

    default:
      viewer = <div>{`Option type ${options.type} is not supported yet`}</div>;
      break;
  }

  return <OptViewerContainer>{viewer}</OptViewerContainer>;
};

export default OptViewerMgr;
