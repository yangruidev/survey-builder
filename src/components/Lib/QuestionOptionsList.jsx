//@flow
import React from 'react';
import type { QuestionOptionsPair } from '../../Schema';
import QuestionOptions from './QuestionOptions';

type Props = {
  questions: Array<QuestionOptionsPair>
};

//can list component be generalized???
const QuestionOptionsList = (props: Props) => {
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
      <div key={q.id}>
        <QuestionOptions {...q} />
      </div>
    );
  });
};

export default QuestionOptionsList;
