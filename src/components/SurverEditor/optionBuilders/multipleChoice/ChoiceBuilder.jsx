//@flow
import React, { Component } from 'react';
import type { ChoiceType } from '../../models/schema';
import Input from '../../../Base/Input';

type Props = {
  index: number,
  choice: ChoiceType,
  removeChoice: (id: string) => void,
  updateChoice: (c: ChoiceType) => void
};

class ChoiceBuilder extends Component<Props, ChoiceType> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: '0',
      text: ''
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

  static getDerivedStateFromProps(props: Props, state: ChoiceType) {
    return props.choice;
  }

  render() {
    const { text } = this.state;
    const { index, choice, removeChoice } = this.props;
    return (
      <div>
        <div className="fx-ctn">
          <div className="fi-10">Label {index + 1}</div>
          <div className="fi-80">
            <Input
              type="text"
              value={text}
              handleBlur={this.updateText}
              placeholder="Enter your option"
              cssClass="form-control"
            />
          </div>
          <div className="fi-10">
            <button type="button" onClick={() => removeChoice(choice.id)}>
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChoiceBuilder;
