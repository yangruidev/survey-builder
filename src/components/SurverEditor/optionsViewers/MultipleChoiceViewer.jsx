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
        <div className="fx-ctn field is-grouped" key={c.id}>
          <div className="fi-10 control" />
          <div className="fi-60 control">
            <label className="radio">
              <input type="radio" value={c.text} checked={false} key={c.id} />
              <span style={{ display: 'inlineBlock', marginLeft: '0.5rem' }}>
                {c.text}
              </span>
            </label>
          </div>
        </div>
      );
    });
  }
  return preview;
};

export default MultipleChoiceViewer;
