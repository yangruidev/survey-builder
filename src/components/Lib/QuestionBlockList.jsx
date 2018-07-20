//@flow
import React from 'react';
import type { Question } from '../../models/Schema';
import QuestionBuilder from './QuestionBuilder';
import OptionsBuilder from './OptionsBuilder';

type Props = {
  questions: Array<Question>,
  updateQuestion: (q: Question) => void
};

const QuestionBlockList = (props: Props) => {
  if (props.questions) {
    return <div>{renderList(props)}</div>;
  } else {
    return <div>No question yet</div>;
  }
};

const renderList = ({ questions, updateQuestion }) => {
  return questions.map((q, index) => {
    return (
      <div key={q.id}>
        <QuestionBuilder
          question={q}
          updateQuestion={updateQuestion}
          index={index}
        />
        <OptionsBuilder type={q.type} />
      </div>
    );
  });
};

export default QuestionBlockList;
