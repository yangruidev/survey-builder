//@flow
import React from 'react';

type Props = {
  value: string,
  handleChange: (value: string) => void,
  type?: string,
  placeholder?: string,
  showLabel?: boolean,
  cssClass?: string
};

const Input = (props: Props) => {
  const { value, type, handleChange, placeholder, cssClass } = props;
  return (
    <input
      type={type || 'text'}
      value={value}
      onChange={e => selfHandleChange(e, handleChange)}
      className={cssClass}
      placeholder={placeholder}
    />
  );
};

const selfHandleChange = (event, handleChange) => {
  if (event.target && event.target.value) {
    handleChange(event.target.value);
  }
};

export default Input;
