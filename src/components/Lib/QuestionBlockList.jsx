//@flow
import React from 'react';
import type { Question } from '../../models/Schema';
import QuestionBuilder from './QuestionBuilder';
import OptionsBuilder from './OptionsBuilder';

type Props = {
  questions: Array<Question>
};

//can list component be generalized???
const QuestionBlockList = (props: Props) => {
  const { questions } = props;
  if (questions) {
    return <div>{renderList(questions)}</div>;
  } else {
    return <div>No question yet</div>;
  }
};

const renderList = questions => {
  console.log(questions);
  return questions.map((q, index) => {
    return (
      <div key={q.id}>
        <QuestionBuilder {...q} index={index} />
        <OptionsBuilder type={q.type} />
      </div>
    );
  });
};

export default QuestionBlockList;
