//@flow
import React from 'react';

type Props<T> = {
  children: Array<T>, //Buttons
  customClass?: string
};

const Group = (props: Props<any>) => {
  const { customClass } = props;
  const className =
    'field is-grouped' + `${customClass ? ' ' + customClass : ''}`;
  const children = props.children.filter(c => !!c); //remove empty child

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        //last one
        if (index + 1 == props.children.length) {
          return <div>{child}</div>;
        } else {
          return <div className="control">{child}</div>;
        }
      })}
    </div>
  );
};

export default Group;
