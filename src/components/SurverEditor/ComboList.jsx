//@flow
import React from 'react';
import type { QuestionType, ComboType, ChoiceType } from './models/schema';
import QuestionBuilder from './QuestionBuilder';
import OptionsBuilderMgr from './optionBuilders/OptionsBuilderMgr';
import QuestionViewer from './QuestionViewer';
import OptionsViewerMgr from './optionsViewers/OptionsViewerMgr';

type Props = {
  combos: Array<ComboType>,
  currentComboId: string,
  initializeNewChoice: () => void,
  updateCombo: (propName: string, propValue: string) => void,
  updateChoice: (choice: ChoiceType) => void,
  editCombo: (comboId: string) => void,
  deleteCombo: (comboId: string) => void,
  removeChoice: (choiceId: string) => void,
  updateQuestion: (question: QuestionType) => void
};

const ComboList = (props: Props) => {
  if (props.combos) {
    return <div>{renderList(props)}</div>;
  } else {
    return <div>No question yet</div>;
  }
};

const renderList = ({
  combos,
  currentComboId,
  updateQuestion,
  updateCombo,
  saveCombo,
  deleteCombo,
  editCombo,
  ...props
}) => {
  return combos.map((combo, index) => {
    const { id, question, options } = combo;
    if (currentComboId && combo.id == currentComboId) {
      return (
        <div key={id}>
          <QuestionBuilder
            question={question}
            updateQuestion={updateQuestion}
            updateCombo={updateCombo}
            index={index}
          />
          <OptionsBuilderMgr
            type={question.type}
            options={options}
            {...props}
          />
          <button onClick={() => deleteCombo(combo.id)}>Delete</button>
        </div>
      );
    } else {
      return (
        <div key={id}>
          <QuestionViewer question={question} index={index} />
          <OptionsViewerMgr options={options} />
          <button onClick={() => editCombo(combo.id)}>Edit</button>
          <button onClick={() => deleteCombo(combo.id)}>Delete</button>
        </div>
      );
    }
  });
};

export default ComboList;
