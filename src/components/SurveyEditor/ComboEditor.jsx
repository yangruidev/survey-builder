//@flow
import React, { Component } from 'react';
import Select from '../Base/Select';
import type { ComboType } from './models/schema';
import Group from '../Base/Group';

type Props = {
  combos: Array<ComboType>,
  currentModalComboId: string
};

type State = {
  selectedComboId: string,
  position: string,
  page: number
};

class ComboEditor extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedComboId: this.props.currentModalComboId,
      position: 'after',
      page: 1
    };
    (this: any).handleSelectedComboChange = this.handleSelectedComboChange.bind(
      this
    );
    (this: any).handlePositionChange = this.handlePositionChange.bind(this);
    (this: any).handlePageChange = this.handlePageChange.bind(this);
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

  render() {
    const comboOptions = this.props.combos.map((c, index) => {
      return { value: c.id, text: `Q ${index + 1} - ${c.question.text}` };
    });
    const pageOptions = [{ text: '1', value: '1' }];
    const positionOptions = [
      { text: 'After', value: 'after' },
      { text: 'Before', value: 'before' }
    ];
    const { selectedComboId, page, position } = this.state;
    return (
      <Group>
        <Select
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
          value={this.state.selectedComboId}
          options={comboOptions}
          handleChange={this.handleSelectedComboChange}
        />
      </Group>
    );
  }
}

export default ComboEditor;
