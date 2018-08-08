import React from 'react';
import QuestionBuilder from './QuestionBuilder';
import OptionsBuilderMgr from './optionBuilders/OptionsBuilderMgr';
import OptViewerMgr from './optionsViewers/OptViewerMgr';

const Combo = props => {
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

export default Combo;
