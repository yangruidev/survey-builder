//@flow
import React from 'react';

type Props = {
  value: string,
  handleChange: (value: string) => void,
  handleBlur?: (value: string) => void,
  type?: string,
  placeholder?: string,
  showLabel?: boolean,
  cssClass?: string
};

const Input = (props: Props) => {
  const {
    value,
    type,
    handleChange,
    handleBlur,
    placeholder,
    cssClass
  } = props;
  return (
    <input
      type={type || 'text'}
      value={value}
      onBlur={e => selfHandleBlur(e, handleBlur)}
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

const selfHandleBlur = (event, handleBlur) => {
  if (event.target && event.target.value && handleBlur) {
    handleBlur(event.target.value);
  }
};

export default Input;
