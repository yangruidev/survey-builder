//@flow
import React, { Component } from 'react';

type Props = {
  content: string,
  author: string,
  brand: string
};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>{props.brand}</strong> by{' '}
          <a href="https://jgthms.com">{props.author}</a> {' ' + props.content}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
