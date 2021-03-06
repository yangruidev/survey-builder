//@flow
import React from 'react';
import type { QuestionType, ComboType, ChoiceType } from './models/schema';
import DismissButton from '../Base/DismissButton';
import QuestionBuilder from './QuestionBuilder';
import OptionsBuilderMgr from './optionBuilders/OptionsBuilderMgr';
import OptViewerMgr from './optionsViewers/OptViewerMgr';
import ComboContainer from './ComboContainer';
import Modal from '../Base/Modal';
import ComboEditor from './ComboEditor';

type Props = {
  combos: Array<ComboType>,
  currentComboId: string,
  isComboModalOpen: boolean,
  //combo
  updateCombo: (propName: string, propValue: string) => void,
  editCombo: (comboId: string) => void,
  deleteCombo: (comboId: string) => void,
  copyCombo: (comboId: string) => void,
  saveCombo: () => void,
  launchComboModal: (comboId: string) => void,
  closeComboModal: () => void,
  //question / option
  initializeNewChoiceUnder: (id: string) => void,
  updateChoice: (choice: ChoiceType) => void,
  removeChoice: (choiceId: string) => void,
  updateQuestion: (question: QuestionType) => void,
  //general
  discardChange: () => void
};

const renderCombo = props => {
  const { isCurrent, type, question, options, index, ...funcs } = props;
  const mode = isCurrent ? 'edit' : 'view';
  return (
    <React.Fragment>
      <QuestionBuilder
        question={question}
        type={type}
        {...funcs}
        index={index}
        mode={mode}
      />
      {isCurrent ? (
        <OptionsBuilderMgr options={options} type={type} {...funcs} />
      ) : (
        <OptViewerMgr options={options} type={type} />
      )}
    </React.Fragment>
  );
};

const renderComboList = ({ combos, currentComboId, ...functions }) => {
  return combos.map((combo, index) => {
    return (
      <ComboContainer
        key={combo.id}
        isCurrent={combo.id == currentComboId}
        combo={combo}
        index={index}
        {...functions}
        render={renderCombo}
      />
    );
  });
};

const renderModalWithComboEditor = ({
  closeComboModal,
  isComboModalOpen,
  ...rest
}) => {
  return (
    <Modal
      title="Move this question to..."
      isOpen={isComboModalOpen}
      handleClose={closeComboModal}
      {...rest}
    >
      {({ combos, currentModalComboId, saveComboMove }) => (
        <ComboEditor
          combos={combos}
          currentModalComboId={currentModalComboId}
          saveComboMove={saveComboMove}
          cancelAction={closeComboModal}
        />
      )}
    </Modal>
  );
};

const ComboList = (props: Props) => {
  const { isComboModalOpen, combos } = props;
  if (combos) {
    return (
      <React.Fragment>
        {isComboModalOpen ? renderModalWithComboEditor(props) : ''}
        {renderComboList(props)}
      </React.Fragment>
    );
  } else {
    return <div>No question yet</div>;
  }
};

export default ComboList;
