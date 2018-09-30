//@flow
import React from 'react';
import type { QuestionType, ComboType, ChoiceType } from './models/schema';
import DismissButton from '../Base/DismissButton';
import Button from '../Base/Button';
import Group from '../Base/Group';

type Props = {
  children: Object => any,
  isCurrent: boolean,
  combo: ComboType,
  //combo
  updateCombo: (propName: string, propValue: string) => void,
  editCombo: (comboId: string) => void,
  deleteCombo: (comboId: string) => void,
  copyCombo: (comboId: string) => void,
  saveCombo: () => void,
  launchComboModal: (comboId: string) => void,
  //question / option
  initializeNewChoiceUnder: (id: string) => void,
  updateChoice: (choice: ChoiceType) => void,
  removeChoice: (choiceId: string) => void,
  updateQuestion: (question: QuestionType) => void,
  //general
  discardChange: () => void
};

const ComboContainer = (props: Props) => {
  const {
    children,
    combo,
    deleteCombo,
    copyCombo,
    editCombo,
    saveCombo,
    launchComboModal,
    discardChange,
    isCurrent,
    ...functions
  } = props;

  return (
    <div className="well is-light">
      <div style={{ marginBottom: '10px' }}>
        {children({ ...combo, ...functions, isCurrent })}
      </div>
      <Group customClass="top-right-corner">
        {isCurrent ? null : (
          <Button
            type="success"
            size="small"
            text="Copy"
            handleClick={() => copyCombo(combo.id)}
          />
        )}
        {isCurrent ? null : (
          <Button
            type="success"
            size="small"
            text="Move"
            handleClick={() => launchComboModal(combo.id)}
          />
        )}
        {isCurrent ? null : (
          <Button
            type="warning"
            size="small"
            text="Edit"
            handleClick={() => editCombo(combo.id)}
          />
        )}
        <DismissButton handleClick={() => deleteCombo(combo.id)} />
      </Group>
      {isCurrent ? (
        <div className="well-footer">
          <Group>
            <Button
              type="primary"
              text="Save"
              handleClick={() => saveCombo()}
            />
            <Button
              type="default"
              text="Cancel"
              handleClick={() => discardChange()}
            />
          </Group>
        </div>
      ) : null}
    </div>
  );
};

export default ComboContainer;
