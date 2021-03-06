//@flow
import React, { Component } from 'react';
import type { ChoiceType } from '../../models/schema';
import Input from '../../../Base/Input';

type Props = {
  index: number,
  showRemove: boolean,
  choice: ChoiceType,
  removeChoice: (id: string) => void,
  updateChoice: (c: ChoiceType) => void,
  initializeNewChoiceUnder: (id: string) => void
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

  renderButtons(props: any) {
    const {
      initializeNewChoiceUnder,
      removeChoice,
      choice,
      showRemove
    } = props;
    return (
      <React.Fragment>
        <a
          type="button"
          className="button control is-primary"
          onClick={() => initializeNewChoiceUnder(choice.id)}
        >
          <span>Add</span>
        </a>
        {showRemove ? (
          <a
            className="button control is-light"
            onClick={() => removeChoice(choice.id)}
          >
            <span>Remove</span>
          </a>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }

  render() {
    const { text } = this.state;
    const { index } = this.props;
    return (
      <div className="fx-ctn field is-grouped is-horizontal">
        <div className="fi-10 control v-center-h-right">Label {index + 1}</div>
        <div className="fi-60 control">
          <Input
            type="text"
            value={text}
            handleBlur={this.updateText}
            placeholder="Enter your option"
            cssClass="form-control"
          />
        </div>
        {this.renderButtons(this.props)}
      </div>
    );
  }
}

export default ChoiceBuilder;
