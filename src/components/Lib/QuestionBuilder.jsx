//@flow
import React from 'react';
import { debounce } from 'underscore';
import type { QuestionType } from '../../models/Schema';
import { QuestionTypes as questionTypes } from '../../models/Config';
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
  updateQuestion: (q: QuestionType) => void
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
    (this: any).updateQuestionType = this.updateQuestionType.bind(this);
  }

  updateQuestionText(text: string) {
    if (text !== this.props.question.text) {
      this.props.updateQuestion({ ...this.props.question, text });
    }
  }

  updateQuestionType(type: string) {
    if (type !== this.props.question.type) {
      this.props.updateQuestion({ ...this.props.question, type });
    }
  }

  componentDidMount() {
    this.setState({ ...this.props.question });
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    return props.question;
  }

  render() {
    const { id, type, text, index } = this.state;
    return (
      <div className="flex-container">
        <div className="flex-item-10">Q{index + 1}</div>
        <div className="flex-item-50">
          <Input
            type="text"
            value={text}
            handleBlur={this.updateQuestionText}
            placeholder="Enter your question"
            cssClass="form-control"
          />
        </div>
        <div className="flex-item-40">
          <Select
            value={type}
            options={questionTypes}
            handleChange={this.updateQuestionType}
            cssClass="form-control"
          />
        </div>
      </div>
    );
  }
}

export default QuestionBlock;
