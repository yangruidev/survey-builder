//@flow
import React from 'react';
import type { QuestionType, ComboType } from './models/schema';
import QuestionBuilder from './QuestionBuilder';
import OptionsMgr from './OptionsMgr';

type Props = {
  current?: string, //combo that checked out being edit
  combos: Array<ComboType>,
  updateQuestion: (id: string, q: QuestionType) => void,
  updateCombo: (comboId: string, propName: string, propValue: string) => void,
  saveCombo: (combo: ComboType) => void
};

const ComboList = (props: Props) => {
  if (props.combos) {
    return <div>{renderList(props)}</div>;
  } else {
    return <div>No question yet</div>;
  }
};

const renderList = ({
  combos,
  updateQuestion,
  updateCombo,
  saveCombo,
  current
}) => {
  return combos.map((combo, index) => {
    const { id, question, options } = combo;
    if (current && combo.id == current) {
      return (
        <div key={id}>
          <QuestionBuilder
            question={question}
            updateQuestion={question => updateQuestion(id, question)}
            updateCombo={(name, value) => updateCombo(id, name, value)}
            index={index}
          />
          <OptionsMgr type={question.type} options={options} />
          <button onClick={() => saveCombo(combo)}>Save</button>
        </div>
      );
    } else {
      return <div key={id}>view only</div>;
    }
  });
};

export default ComboList;
