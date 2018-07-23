//@flow
import React from 'react';
import { BaseButton } from '../Base/Button';

type Props = {
  add: () => void
};

const AddNewQuestion = (props: Props) => {
  const { add } = props;
  const style = {
    width: '100%',
    height: '10em',
    border: '1px dashed #AAA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return (
    <div style={style}>
      <BaseButton onClick={add}>New Question</BaseButton>
    </div>
  );
};

export default AddNewQuestion;
