//@flow
import React, { Component } from 'react';

type Props = {
  content: string
};

const Footer = (props: Props) => {
  return (
    <footer class="footer">
      <div class="container">
        <span class="text-muted">{props.content}</span>
      </div>
    </footer>
  );
};

export default Footer;
