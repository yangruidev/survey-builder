//@flow
import React from 'react';
import type { Question } from '../../models/Schema';
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

class QuestionBlock extends React.Component<Question, State> {
  constructor(props: Question) {
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

  updateQuestionText(value: string) {
    this.setState({ text: value });
  }

  updateQuestionType(value: string) {
    this.setState({ type: value });
  }

  componentDidMount() {
    this.setState({ ...this.props });
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
            handleChange={this.updateQuestionText}
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
