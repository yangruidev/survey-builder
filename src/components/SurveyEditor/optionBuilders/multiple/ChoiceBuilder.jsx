//@flow
import React, { Component, useState } from 'react';
import styled from 'react-emotion';
import type { ChoiceType } from '../../models/schema';
import Input from '../../../Base/Input';
import Button from '../../../Base/Button';

const Label = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

type Props = {
  index: number,
  showRemove: boolean,
  choice: ChoiceType,
  removeChoice: (id: string) => void,
  updateChoice: (c: ChoiceType) => void,
  initializeNewChoiceUnder: (id: string) => void
};

const ChoiceBuilder = (props: Props, choiceType: ChoiceType) => {
  const initial = props.choice.text || '';
  const [text, setText] = useState(initial);

  const updateText = text => {
    props.updateChoice({ ...props.choice, text });
  };

  const Buttons = ({
    initializeNewChoiceUnder,
    removeChoice,
    choice,
    showRemove
  }) => {
    return (
      <React.Fragment>
        <Button
          type="primary"
          handleClick={() => initializeNewChoiceUnder(choice.id)}
        >
          Add
        </Button>
        {showRemove ? (
          <Button
            type="default"
            handleClick={() => removeChoice(choice.id)}
            customStyle={{ marginLeft: '5px' }}
          >
            Remove
          </Button>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="flex-container field is-grouped is-horizontal">
      <Label className="flex-item-10 control">Label {props.index + 1}</Label>
      <div className="flex-item-60 control">
        <Input
          type="text"
          value={text}
          handleBlur={updateText}
          placeholder="Enter your option"
          cssClass="form-control"
        />
      </div>
      <Buttons {...props} />
    </div>
  );
};

export default ChoiceBuilder;
