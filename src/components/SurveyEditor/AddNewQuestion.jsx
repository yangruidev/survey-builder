//@flow
import React from 'react';
import Button from '../Base/Button';

type Props = {
  add: () => void
};

const AddNewQuestion = (props: Props) => {
  const { add } = props;
  const style = {
    width: '100%',
    height: '10em',
    border: '1px dashed #aaa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return (
    <div style={style}>
      <Button type="primary" text="New Question" handleClick={add} />
    </div>
  );
};

export default AddNewQuestion;
