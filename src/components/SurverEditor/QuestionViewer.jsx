//@flow
import React from 'react';
import type { QuestionType } from './models/schema';

type Props = {
  question: QuestionType,
  index: number
};

const QuestionViewer = (props: Props) => {
  const { question, index } = props;
  return (
    <div className="fx-ctn">
      <div className="fi-10">Q{index + 1}</div>
      <div className="fi-90">{question.text}</div>
    </div>
  );
};

export default QuestionViewer;
