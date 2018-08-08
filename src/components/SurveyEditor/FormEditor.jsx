//@flow
import React, { Component } from 'react';
import type {
  QuestionType,
  ComboType,
  ChoiceType,
  MoveType
} from './models/schema';
import ComboList from './ComboList';
import AddNewQuestion from './AddNewQuestion';
import { updateChoice, removeChoice } from './actions/buildActions';
type State = {};
type Props = {
  combos: Array<ComboType>,
  currentComboId: string,
  currentModalComboId: string,
  isComboModalOpen: boolean,
  //combo
  fetchCombos: () => Function,
  initializeNewCombo: () => void,
  updateCombo: (propName: string, propValue: string) => void,
  editCombo: (comboId: string) => void,
  deleteCombo: (comboId: string) => void,
  copyCombo: (comboId: string) => void,
  saveCombo: () => void,
  launchComboModal: (comboId: string) => void,
  saveComboMove: (move: MoveType) => void,
  closeComboModal: () => void,
  //question / option
  initializeNewChoiceUnder: (id: string) => void,
  updateChoice: (choice: ChoiceType) => void,
  removeChoice: (choiceId: string) => void,
  updateQuestion: (question: QuestionType) => void,
  //general
  discardChange: () => void
};

class FormEditor extends Component<Props, State> {
  componentDidMount() {
    this.props.fetchCombos();
  }

  render() {
    const { initializeNewCombo, ...rest } = this.props;
    return (
      <React.Fragment>
        <ComboList {...rest} />
        <div style={{ marginTop: '0.75rem' }}>
          <AddNewQuestion add={initializeNewCombo} />
        </div>
      </React.Fragment>
    );
  }
}

export default FormEditor;
