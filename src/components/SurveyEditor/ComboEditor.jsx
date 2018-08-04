//@flow
import React, { Component, Fragment } from 'react';
import Select from '../Base/Select';
import type { ComboType, MoveType } from './models/schema';
import Group from '../Base/Group';
import Button from '../Base/Button';
import { ComboMovePositionConfig } from './models/config';

type Props = {
  combos: Array<ComboType>,
  currentModalComboId: string,
  saveComboMove: (move: MoveType) => void,
  cancelAction: () => void
};

type State = MoveType;

class ComboEditor extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedComboId: '',
      position: 'after',
      page: 1
    };
    (this: any).handleSelectedComboChange = this.handleSelectedComboChange.bind(
      this
    );
    (this: any).handlePositionChange = this.handlePositionChange.bind(this);
    (this: any).handlePageChange = this.handlePageChange.bind(this);
    (this: any).saveComboMove = this.saveComboMove.bind(this);
  }

  handleSelectedComboChange(selectedComboId: string) {
    this.setState({ selectedComboId });
  }
  handlePageChange(pageStr: string) {
    this.setState({ page: parseInt(pageStr) });
  }
  handlePositionChange(position: string) {
    this.setState({ position });
  }
  saveComboMove() {
    this.props.saveComboMove(this.state);
  }
  removeCurrentFromComboOptions({ combos, currentModalComboId }: Props) {
    return (combos: any)
      .map((c, index) => ({
        value: c.id,
        text: `Q ${index + 1} - ${c.question.text}`
      })) //must map first to keep the correct index
      .filter(c => c.value !== currentModalComboId);
  }

  render() {
    const { page, position } = this.state;
    const { combos, currentModalComboId } = this.props;
    const comboOptions = this.removeCurrentFromComboOptions(this.props);
    const defaultComboId = comboOptions[0].value;
    const selectedComboId = this.state.selectedComboId
      ? this.state.selectedComboId
      : defaultComboId;
    const pageOptions = [{ text: '1', value: '1' }]; //hard code at this point
    const positionOptions = ComboMovePositionConfig;
    return (
      <Fragment>
        <Group>
          <Select
            label="Page"
            showLabel={true}
            value={page.toString()}
            options={pageOptions}
            handleChange={this.handlePageChange}
          />
          <Select
            value={position}
            options={positionOptions}
            handleChange={this.handlePositionChange}
          />
          <Select
            value={selectedComboId}
            options={comboOptions}
            handleChange={this.handleSelectedComboChange}
          />
        </Group>
        <Group>
          <Button text="Save" type="primary" handleClick={this.saveComboMove} />
          <Button
            text="Cancel"
            type="default"
            handleClick={this.props.cancelAction}
          />
        </Group>
      </Fragment>
    );
  }
}

export default ComboEditor;
