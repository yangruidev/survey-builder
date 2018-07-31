//@flow
import React from 'react';
import Select from '../../Base/Select';

type Props = {
  options: Array<{ value: string, text: string }>
};

const DropdownViewer = (props: Props) => {
  return (
    <div>
      <Select
        showLabel={false}
        options={props.options}
        value=""
        handleChange={handleChange}
      />
    </div>
  );
};

const handleChange = x => {
  console.log(x);
};

export default DropdownViewer;
