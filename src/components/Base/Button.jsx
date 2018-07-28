//@flow
import React from 'react';

type Props = {
  handleClick: (identifier: string) => void,
  text?: string,
  size?: string, //small, medium, large
  type?: string, //primary, link, info, success, warning, danger
  state?: string, //focused, active, loading, static
  isDisabled?: boolean,
  isOutlined?: boolean,
  isInverted?: boolean,
  isRounded?: boolean,
  isTextOnLeft?: boolean,
  customClass?: string,
  children?: Object
};

const Button = (props: Props) => {
  const {
    handleClick,
    size,
    type,
    text,
    isDisabled,
    isOutlined,
    isRounded,
    isInverted,
    isTextOnLeft,
    customClass,
    state
  } = props;

  const classNames = [
    `button`,
    `${size ? 'is-' + size : ''}`,
    `${type ? 'is-' + type : 'is-default'}`,
    `${state ? 'is-' + state : ''}`,
    `${isOutlined ? 'is-outlined' : ''}`,
    `${isInverted ? 'is-inverted' : ''}`,
    `${isRounded ? 'is-rounded' : ''}`,
    `${customClass ? customClass : ''}`
  ];

  const buttonProps = {
    className: classNames.filter(c => c.length > 0).join(' '),
    onClick: handleClick,
    disabled: isDisabled
  };

  return <a {...buttonProps}>{renderTextAndChildren(props)}</a>;
};

const renderTextAndChildren = ({ children, text, isTextOnLeft }) => {
  if (isTextOnLeft) {
    return (
      <React.Fragment>
        {text ? <span>{text}</span> : ''}
        {children}
      </React.Fragment>
    );
  } else {
    //default
    return (
      <React.Fragment>
        {children}
        {text ? <span>{text}</span> : ''}
      </React.Fragment>
    );
  }
};

export default Button;
