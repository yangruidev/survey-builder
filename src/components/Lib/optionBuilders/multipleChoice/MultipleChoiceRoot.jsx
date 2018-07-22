//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { ChoiceType } from '../schema';
import { addNewChoice, updateChoice } from '../actions/multipleActions';
import MultipleChoiceOptionBuilder from './MultipleChoiceContainer';

const mapStateToProps = (state, ownProps) => {
  const { choices, currentChoiceId } = state.multipleReducer;
  const { savedChoices } = ownProps.choices;

  return {
    choices,
    currentChoiceId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewChoice: () => {
      dispatch(addNewChoice());
    },
    updateChoice: (choice: ChoiceType) => {
      dispatch(updateChoice(choice));
    }
  };
};

const MultipleChoiceRoot = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultipleChoiceOptionBuilder);

export default MultipleChoiceRoot;
