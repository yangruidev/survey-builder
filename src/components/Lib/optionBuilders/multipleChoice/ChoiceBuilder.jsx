//@flow
import React, { Component } from 'react';
import type { ChoiceType } from '../schema';
import Input from '../../../Base/Input';

type Props = {
  index: number,
  choice: ChoiceType,
  updateChoice: (c: ChoiceType) => void
};

type State = {
  id: string,
  text: string
};

class ChoiceBuilder extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: '0',
      text: 'Enter your option'
    };
    (this: any).updateText = this.updateText.bind(this);
  }

  updateText(text: string) {
    if (text !== this.props.choice.text) {
      this.props.updateChoice({ ...this.props.choice, text });
    }
  }

  componentDidMount() {
    this.setState({ ...this.props.choice });
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    return props.choice;
  }

  render() {
    const { text } = this.state;
    const { index } = this.props;
    return (
      <div>
        <div className="flex-container">
          <div className="flex-item-10">Label {index + 1}</div>
          <div className="flex-item-80">
            <Input
              type="text"
              value={text}
              handleBlur={this.updateText}
              placeholder="Enter your option"
              cssClass="form-control"
            />
          </div>
          <div className="flex-item-10">x</div>
        </div>
      </div>
    );
  }
}

export default ChoiceBuilder;
