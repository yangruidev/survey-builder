//@flow
import React, { useState } from 'react';
import type { OptionsType, ChoiceType } from '../models/schema';

type Props = {
  choices: Array<ChoiceType>
};

const MultipleChoiceViewer = (props: Props) => {
  const { choices } = props;

  const initial = choices && choices.length > 0 ? choices[0].id : '';
  const [current, setCurrent] = useState(initial);

  let preview: Array<Object> = [];
  if (choices && choices.length > 0) {
    preview = choices.map(c => {
      return (
        <div key={c.id} className="field is-grouped">
          <label className="radio">
            <input
              type="radio"
              value={c.text}
              checked={current === c.id}
              key={c.id}
              onChange={() => setCurrent(c.id)}
            />
            <span style={{ display: 'inlineBlock', marginLeft: '0.5rem' }}>
              {c.text}
            </span>
          </label>
        </div>
      );
    });
  }
  return preview;
};

export default MultipleChoiceViewer;
