//@flow
import React from 'react';

type Props = {
  children: Object
};

const OptViewerContainer = (props: Props) => {
  return (
    <div className="flex-container field is-grouped">
      <div className="flex-item-10 control" />
      <div className="flex-item-60">{props.children}</div>
    </div>
  );
};

export default OptViewerContainer;
