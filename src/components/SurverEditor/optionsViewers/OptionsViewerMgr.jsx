//@flow
import React from 'react';
import { QuestionTypeCodes } from '../models/constant';
import type { OptionsType, ChoiceType } from '../models/schema';
import MultipleChoiceViewer from '../optionsViewers/MultipleChoiceViewer';
import SingleTextboxViewer from '../optionsViewers/SingleTextboxViewer';

type Props = {
  options: OptionsType
};
const OptionsViewerMgr = (props: Props) => {
  const { options } = props;
  switch (options.type) {
    case QuestionTypeCodes.MULTIPLE_CHOICE:
      let choices: Array<ChoiceType> = [];
      if (options.value && Array.isArray(options.value)) {
        choices = options.value;
      }
      return <MultipleChoiceViewer choices={choices} />;

    default:
      return <SingleTextboxViewer />;
  }
};

export default OptionsViewerMgr;
