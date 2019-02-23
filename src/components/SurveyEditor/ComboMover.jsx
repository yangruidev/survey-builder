//@flow
import React, { useState, Fragment } from 'react'
import Select from '../Base/Select'
import type { ComboType, MoveType } from './models/schema'
import Group from '../Base/Group'
import Button from '../Base/Button'
import { ComboMovePositionConfig } from './models/config'

type Props = {
  combos: Array<ComboType>,
  currentModalComboId: string,
  saveComboMove: (move: MoveType) => void,
  cancelAction: () => void,
}

const ComboMover = (props: Props) => {
  const [currentComboId, setCurrentComboId] = useState('')
  const [page, setPage] = useState('1')
  const [position, setPosition] = useState('after')

  const handleSelectedComboChange = (id: string) => {
    setCurrentCombo(id)
  }
  const handlePageChange = (pageStr: string) => {
    setPage(parseInt(pageStr))
  }
  const handlePositionChange = (position: string) => {
    setPosition(position)
  }
  const saveComboMove = () => {
    props.saveComboMove({ selectedComboId: currentComboId, page, position })
  }

  const { combos, currentModalComboId, cancelAction } = props
  const comboOptions = props.combos
    .map((c, index) => ({
      value: c.id,
      text: `Q ${index + 1} - ${c.question.text}`,
    })) //must map first to keep the correct index
    .filter(c => c.value !== currentModalComboId)
  const defaultComboId = comboOptions[0].value
  const pageOptions = [{ text: '1', value: '1' }] //hard code at this point
  const positionOptions = ComboMovePositionConfig

  return (
    <Fragment>
      <Group>
        <Select
          label="Page"
          showLabel={true}
          value={page.toString()}
          options={pageOptions}
          handleChange={handlePageChange}
        />
        <Select value={position} options={positionOptions} handleChange={handlePositionChange} />
        <Select
          value={currentComboId || defaultComboId}
          options={comboOptions}
          handleChange={handleSelectedComboChange}
        />
      </Group>
      <Group>
        <Button text="Save" type="primary" handleClick={saveComboMove} />
        <Button text="Cancel" type="default" handleClick={cancelAction} />
      </Group>
    </Fragment>
  )
}

export default ComboMover
