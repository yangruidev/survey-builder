//@flow
import React, { Component } from 'react';

type Props = {
  content: string
};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">{props.content}</span>
      </div>
    </footer>
  );
};

export default Footer;
