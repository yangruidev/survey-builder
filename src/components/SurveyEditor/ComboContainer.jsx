//@flow
import React from 'react';
import styled from 'react-emotion';
import type { QuestionType, ComboType, ChoiceType } from './models/schema';
import DismissButton from '../Base/DismissButton';
import Button from '../Base/Button';
import Group from '../Base/Group';

const Well = styled('div')`
  position: relative;
  padding: 1.25rem 0;
  border-bottom: 1px solid #eee;
`;

const WellFooter = styled('div')`
  padding: 0.75rem;
  padding-bottom: 0;
  display: flex;
  justify-content: flex-end;
  border-top: 2px solid white;
`;

const TopRight = styled('div')`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
`;

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
    <Well>
      <div style={{ marginBottom: '10px' }}>
        {children({ ...combo, ...functions, isCurrent })}
      </div>
      {isCurrent ? null : (
        <TopRight>
          <Group>
            <Button
              type="success"
              size="small"
              text="Copy"
              handleClick={() => copyCombo(combo.id)}
            />

            <Button
              type="success"
              size="small"
              text="Move"
              handleClick={() => launchComboModal(combo.id)}
            />

            <Button
              type="warning"
              size="small"
              text="Edit"
              handleClick={() => editCombo(combo.id)}
            />

            <DismissButton handleClick={() => deleteCombo(combo.id)} />
          </Group>
        </TopRight>
      )}
      {isCurrent ? (
        <WellFooter>
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
        </WellFooter>
      ) : null}
    </Well>
  );
};

export default ComboContainer;
