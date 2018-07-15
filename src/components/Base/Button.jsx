import styled, { css } from 'styled-components';
import { Button } from 'reakit';

const BaseButton = styled.button`
  border-radius: 3px;
  padding: 0.5em 1em;
  margin: 0 1em;
  background: transparent;
  color: #2196F3;
  border: 2px solid #2196F3;

  &:focus, &:active, &:visited {
    outline: none;
  }

  &:hover {
    cursor: pointer
  }

  ${props => props.primary && css`
    background: #2196F3;
    color: #FFF;
    &:hover {
      background: #1976D2;
      border-color: #1976D2;
    }
  `}
`;

const RoundButton = BaseButton.extend`
  border-radius: 22px;

  ${props => props.primary && css`
    background: #2196F3;
    color: #FFF;
  `}
`;

export { BaseButton, RoundButton };