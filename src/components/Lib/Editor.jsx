//@flow
import React from 'react';
import { Question } from '../Schema';

type Props = {
  questions: Array<Question>,
  current: Question
};

const Editor = (props: Props) => {
  const { questions, current } = props;
  return <div>this is an editor</div>;
};

export default Editor;
