//@flow
import React from 'react'
import styled from 'react-emotion'
import type { QuestionType } from './models/schema'
import { QuestionTypes as questionTypes } from './models/config'
import Select from '../Base/Select'
import Input from '../Base/Input'
import { BLUE } from '../constants'

const Label = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

type Props = {
  question: QuestionType,
  type: string,
  index: number,
  updateQuestion: (q: QuestionType) => void,
  updateCombo: (propName: string, propValue: string) => void,
  mode?: string, // edit(default), view
}

const QuestionBlock = ({ mode, question, type, index, updateQuestion, updateCombo }) => {
  const updateQuestionText = (text: string) => {
    if (text !== question.text) {
      updateQuestion({ ...question, text })
    }
  }

  const updateComboType = (t: string) => {
    if (t !== type) {
      updateCombo('type', type)
    }
  }

  const isViewMode = mode == 'view'
  const displayQuestionStyle = {
    height: '36px',
    fontSize: '1.2rem',
    lineHeight: '36px',
    color: `${BLUE}`,
  }
  return (
    <div className="flex-container field is-grouped">
      <Label className="flex-item-10 control">Q{index + 1}</Label>
      <div className="flex-item-60 control">
        {isViewMode ? (
          <p style={displayQuestionStyle}>{question.text}</p>
        ) : (
          <Input type="text" value={question.text} handleBlur={updateQuestionText} placeholder="Enter your question" />
        )}
      </div>
      {isViewMode ? null : (
        <div className="flex-item-30 control">
          <Select value={type} options={questionTypes} handleChange={updateComboType} />
        </div>
      )}
    </div>
  )
}

export default QuestionBlock
