//@flow
import React from 'react';
import type { Question } from '../../models/Schema';
import QuestionBlockList from './QuestionBlockList';
import AddNewQuestion from './AddNewQuestion';

type Props = {
  questions: Array<Question>,
  currentQuestionId: number,
  addNewQuestion: () => void
};

const SurveyForm = (props: Props) => {
  const { questions, currentQuestionId, addNewQuestion } = props;

  return (
    <div>
      <QuestionBlockList questions={questions} current={currentQuestionId} />
      <AddNewQuestion add={addNewQuestion} />
    </div>
  );
};

export default SurveyForm;
