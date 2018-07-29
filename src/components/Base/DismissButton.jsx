//@flow
import React from 'react';
import Button from './Button';

type Props = {
  handleClick: (identifier: string) => void,
  customClass?: string,
  text?: string
};

const DismissButton = (props: Props) => {
  const { handleClick, customClass } = props;
  const cc = customClass ? customClass : '';

  return (
    <Button
      size="small"
      type="warning"
      customClass={cc}
      handleClick={handleClick}
    >
      <span className="icon is-small">
        <i className="fas fa-times" />
      </span>
    </Button>
  );
};

export default DismissButton;
