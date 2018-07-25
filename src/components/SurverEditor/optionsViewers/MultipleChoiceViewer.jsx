//@flow
import React from 'react';
import type { OptionsType, ChoiceType } from '../models/schema';

type Props = {
  choices: Array<ChoiceType>
};

const MultipleChoiceViewer = (props: Props) => {
  const { choices } = props;
  let preview: Array<Object> = [];
  if (choices && choices.length > 0) {
    preview = choices.map(c => {
      return (
        <div key={c.id}>
          <input type="radio" value={c.text} checked={false} key={c.id} />
          <label>{c.text}</label>
        </div>
      );
    });
  }
  return preview;
};

export default MultipleChoiceViewer;
