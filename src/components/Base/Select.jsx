//@flow
import React from 'react';

type Props = {
  value: string,
  handleChange: (value: string) => void,
  options: Array<{ value: string, text: string }>,
  showLabel?: boolean,
  label?: string,
  cssClass?: string
};

const Select = (props: Props) => {
  const { value, handleChange, options, label, showLabel, cssClass } = props;
  const dropdown = (
    <div className="select">
      <select
        value={value}
        onChange={e => selfHandleChange(e, handleChange)}
        className={cssClass}
      >
        {options.map(o => (
          <option value={o.value} key={o.value}>
            {o.text}
          </option>
        ))}
      </select>
    </div>
  );
  return showLabel ? (
    <div>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <span>{label}</span>
        {dropdown}
      </label>
    </div>
  ) : (
    <div>{dropdown}</div>
  );
};

const selfHandleChange = (event, handleChange) => {
  if (event.target && event.target.value) {
    handleChange(event.target.value);
  }
};

export default Select;
