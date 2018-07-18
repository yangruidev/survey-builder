//@flow
import React from 'react';
import type { QuestionOptionsPair } from '../../Schema';

type State = {
  text: string,
  options: Object
};

class QuestionOptions extends React.Component<QuestionOptionsPair, State> {
  constructor(props: QuestionOptionsPair) {
    super(props);
    this.state = {
      text: '',
      options: {}
    };
    (this: any).handleChange = this.handleChange.bind(this);
  }

  //$FlowFixMe
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { text, options, id } = this.props;
    return <input type="text" value={text} onChange={this.handleChange} />;
  }
}

export default QuestionOptions;
