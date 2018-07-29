//@flow
import React from 'react';
import type { QuestionType, ComboType, ChoiceType } from './models/schema';
import DismissButton from '../Base/DismissButton';
import QuestionBuilder from './QuestionBuilder';
import OptionsBuilderMgr from './optionBuilders/OptionsBuilderMgr';
import OptionsViewerMgr from './optionsViewers/OptionsViewerMgr';
import ComboContainer from './ComboContainer';

type Props = {
  combos: Array<ComboType>,
  currentComboId: string,
  initializeNewChoiceUnder: (id: string) => void,
  updateCombo: (propName: string, propValue: string) => void,
  updateChoice: (choice: ChoiceType) => void,
  editCombo: (comboId: string) => void,
  deleteCombo: (comboId: string) => void,
  removeChoice: (choiceId: string) => void,
  updateQuestion: (question: QuestionType) => void
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

const renderCombo = props => {
  const { isCurrent, question, options, index, ...funcs } = props;
  const mode = isCurrent ? 'edit' : 'view';
  return (
    <React.Fragment>
      <QuestionBuilder
        question={question}
        {...funcs}
        index={index}
        mode={mode}
      />
      {isCurrent ? (
        <OptionsBuilderMgr options={options} type={question.type} {...funcs} />
      ) : (
        <OptionsViewerMgr options={options} type={question.type} />
      )}
    </React.Fragment>
  );
};

const ComboList = (props: Props) => {
  if (props.combos) {
    return <React.Fragment>{renderComboList(props)}</React.Fragment>;
  } else {
    return <div>No question yet</div>;
  }
};

export default ComboList;
