//@flow
import React from 'react';
import type { QuestionType } from './models/schema';
import { QuestionTypes as questionTypes } from './models/config';
import Select from '../Base/Select';
import Input from '../Base/Input';

type State = {
  index: number,
  id: string,
  text: string,
  type: string,
  dirty: boolean
};

type Props = {
  question: QuestionType,
  type: string,
  index: number,
  updateQuestion: (q: QuestionType) => void,
  updateCombo: (propName: string, propValue: string) => void,
  mode?: string // edit(default), view
};

class QuestionBlock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      index: 0,
      id: '0',
      text: '',
      type: '',
      dirty: false
    };
    (this: any).updateQuestionText = this.updateQuestionText.bind(this);
    (this: any).updateComboType = this.updateComboType.bind(this);
  }

  updateQuestionText(text: string) {
    if (text !== this.props.question.text) {
      this.props.updateQuestion({ ...this.props.question, text });
    }
  }

  updateComboType(type: string) {
    if (type !== this.props.type) {
      this.props.updateCombo('type', type);
    }
  }

  handleSave(output: string | JSON) {
    console.log(output);
  }

  renderQuestionEditor(text: string) {
    return (
      <Input
        type="text"
        value={text}
        handleBlur={this.updateQuestionText}
        placeholder="Enter your question"
      />
    );
  }

  componentDidMount() {
    const { type, index } = this.props;
    this.setState({ type, index, ...this.props.question });
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    return props.question;
  }

  render() {
    const { id, type, text, index } = this.state;
    const isViewMode = this.props.mode == 'view';
    const displayQuestionStyle = {
      height: '36px',
      fontSize: '1.2rem',
      lineHeight: '36px'
    };
    return (
      <div className="fx-ctn field is-grouped">
        <div className="fi-10 control v-center-h-right">Q{index + 1}</div>
        <div className="fi-60 control">
          {isViewMode ? (
            <p className="display-question" style={displayQuestionStyle}>
              {text}
            </p>
          ) : (
            this.renderQuestionEditor(text)
          )}
        </div>
        {isViewMode ? null : (
          <div className="fi-30 control">
            <Select
              value={type}
              options={questionTypes}
              handleChange={this.updateComboType}
            />
          </div>
        )}
      </div>
    );
  }
}

export default QuestionBlock;
