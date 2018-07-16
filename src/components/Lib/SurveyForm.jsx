//@flow
import React from 'react';
import type { Question } from '../../Schema';
import Questions from './Questions';
import AddNewQuestion from './AddNewQuestion';

type Props = {
  questions: Array<Question>,
  currentQuestionId: number,
  addNewQuestion: () => void
};

const SurveyForm = (props: Props) => {
  const { questions, currentQuestionId, addNewQuestion } = props;
  //this component is not updated on add new question...

  return (
    <div>
      <Questions questions={questions} current={currentQuestionId} />
      <AddNewQuestion add={addNewQuestion} />
    </div>
  );
};

export default SurveyForm;
