//@flow
import React from 'react';

type Props = {
  children: Object
};

const OptViewerContainer = (props: Props) => {
  return (
    <div className="fx-ctn field is-grouped">
      <div className="fi-10 control" />
      <div className="fi-60">{props.children}</div>
    </div>
  );
};

export default OptViewerContainer;
