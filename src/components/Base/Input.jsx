//@flow
// The value change won't be lifted up until the input is not longer focused
import React, { Component } from 'react';

type Props = {
  value: string,
  handleBlur: (value: string) => void,
  type?: string,
  placeholder?: string,
  showLabel?: boolean,
  cssClass?: string
};

type State = {
  value: string
};

class Input extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: ''
    };
    (this: any).handleChange = this.handleChange.bind(this);
    (this: any).selfHandleBlur = this.selfHandleBlur.bind(this);
  }

  handleChange(event: Object) {
    this.setState({ value: event.target.value });
  }

  selfHandleBlur(event: Object, handleBlur: (value: string) => void) {
    if (event.target && event.target.value && handleBlur) {
      handleBlur(event.target.value);
    }
  }

  componentDidMount() {
    this.setState({ value: this.props.value });
  }

  render() {
    const { type, handleBlur, placeholder, cssClass } = this.props;

    const { value } = this.state;

    return (
      <input
        type={type || 'text'}
        value={value}
        onBlur={e => this.selfHandleBlur(e, handleBlur)}
        onChange={this.handleChange}
        className={'${cssClass} input'}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
