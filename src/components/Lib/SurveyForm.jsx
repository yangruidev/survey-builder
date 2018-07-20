//@flow
import React from 'react';
import type { Question } from '../../models/Schema';
import QuestionBlockList from './QuestionBlockList';
import AddNewQuestion from './AddNewQuestion';

type Props = {
  questions: Array<Question>,
  currentQuestionId: number,
  addNewQuestion: () => void,
  updateQuestion: (q: Question) => void
};

const SurveyForm = (props: Props) => {
  const {
    questions,
    currentQuestionId,
    addNewQuestion,
    updateQuestion
  } = props;

  return (
    <div>
      <QuestionBlockList
        questions={questions}
        current={currentQuestionId}
        updateQuestion={updateQuestion}
      />
      <AddNewQuestion add={addNewQuestion} />
    </div>
  );
};

export default SurveyForm;
