//@flow
import React from 'react';
import type { QuestionOptionsPair } from '../../Schema';
import QuestionOptionsList from './QuestionOptionsList';
import AddNewQuestion from './AddNewQuestion';

type Props = {
  questions: Array<QuestionOptionsPair>,
  currentQuestionId: number,
  addNewQuestion: () => void
};

const SurveyForm = (props: Props) => {
  const { questions, currentQuestionId, addNewQuestion } = props;

  return (
    <div>
      <QuestionOptionsList questions={questions} current={currentQuestionId} />
      <AddNewQuestion add={addNewQuestion} />
    </div>
  );
};

export default SurveyForm;
