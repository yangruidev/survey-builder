//@flow
// The value change won't be lifted up until the input is not longer focused
import React, { useState } from 'react';
import { css } from 'react-emotion';

const inputView = css`
  background: transparent;
  &:focus {
    border: none;
    box-shadow: none;
  }
  &:hover {
    border: none;
    box-shadow: none;
  }
`;

type Props = {
  value: string,
  handleBlur: (value: string) => void,
  type?: string,
  placeholder?: string,
  showLabel?: boolean,
  cssClass?: string,
  mode?: string //view, edit(default)
};

const Input = (props: Props) => {
  const [value, setValue] = useState(props.value || '');
  const { type, handleBlur, placeholder, cssClass, mode } = props;
  const classNames = [
    `input`,
    `${
      mode == 'view'
        ? css`
            ${inputView};
          `
        : ''
    }`,
    `${cssClass ? cssClass : ''}`
  ];

  const inputProps = {
    readOnly: mode == 'view'
  };

  return (
    <input
      type={type || 'text'}
      value={value}
      onBlur={e => props.handleBlur(e.target.value)}
      onChange={e => setValue(e.target.value)}
      className={classNames.filter(c => !!c).join(' ')}
      placeholder={placeholder}
      {...inputProps}
    />
  );
};

export default Input;
