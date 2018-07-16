//@flow
import React from 'react';
import type { Question } from '../../Schema';

type Props = {
  questions: Array<Question>
};

//can list component be generalized???
const Questions = (props: Props) => {
  const { questions } = props;
  if (questions) {
    return <div>{renderQuestionList(questions)}</div>;
  } else {
    return <div>No question yet</div>;
  }
};

const renderQuestionList = questions => {
  return questions.map(q => {
    return (
      <div>
        {q.text} | {q.type}
      </div>
    );
  });
};

export default Questions;
