//@flow
import React from 'react'
import type { QuestionType, ComboType, ChoiceType } from './models/schema'
import DismissButton from '../Base/DismissButton'
import ComboContainer from './ComboContainer'
import Modal from '../Base/Modal'
import ComboMover from './ComboMover'
import Combo from './Combo'

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
  discardChange: () => void,
}

const ModalWithComboEditor = ({ closeComboModal, isComboModalOpen, ...rest }) => {
  return (
    <Modal title="Move this question to..." isOpen={isComboModalOpen} handleClose={closeComboModal} {...rest}>
      {({ combos, currentModalComboId, saveComboMove }) => (
        <ComboMover
          combos={combos}
          currentModalComboId={currentModalComboId}
          saveComboMove={saveComboMove}
          cancelAction={closeComboModal}
        />
      )}
    </Modal>
  )
}

const ComboList = (props: Props) => {
  const { isComboModalOpen, combos, currentComboId, ...functions } = props
  if (combos) {
    return (
      <React.Fragment>
        {isComboModalOpen ? <ModalWithComboEditor {...props} /> : ''}
        {combos.map((combo, index) => (
          <ComboContainer
            key={combo.id}
            isCurrent={combo.id == currentComboId}
            combo={combo}
            index={index}
            {...functions}>
            {props => <Combo {...props} />}
          </ComboContainer>
        ))}
      </React.Fragment>
    )
  } else {
    return <div>No question yet</div>
  }
}

export default ComboList
