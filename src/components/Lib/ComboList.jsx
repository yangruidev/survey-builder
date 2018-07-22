//@flow
import React from 'react';
import type { QuestionType, ComboType } from '../../models/Schema';
import QuestionBuilder from './QuestionBuilder';
import OptionsBuilder from './OptionsBuilder';

type Props = {
  current?: string, //combo that checked out being edit
  combos: Array<ComboType>,
  updateQuestion: (q: QuestionType) => void
};

const ComboList = (props: Props) => {
  if (props.combos) {
    return <div>{renderList(props)}</div>;
  } else {
    return <div>No question yet</div>;
  }
};

const renderList = ({ combos, updateQuestion }) => {
  return combos.map((combo, index) => {
    const { question, options } = combo;
    return (
      <div key={question.id}>
        <QuestionBuilder
          question={question}
          updateQuestion={updateQuestion}
          index={index}
        />
        <OptionsBuilder type={question.type} options={options} />
      </div>
    );
  });
};

export default ComboList;
