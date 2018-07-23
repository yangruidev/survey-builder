//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { ChoiceType } from '../../models/schema';
import { addNewChoice, updateChoice } from '../actions/multipleActions';
import MultipleChoiceContainer from './MultipleChoiceContainer';

const mapStateToProps = (state, ownProps) => {
  const { choices, currentChoiceId } = state.optionsReducer;

  return {
    //if choices passed from parent is not null, use them, otherwise use default choices
    choices: ownProps.choices ? ownProps.choices : choices,
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
)(MultipleChoiceContainer);

export default MultipleChoiceRoot;
