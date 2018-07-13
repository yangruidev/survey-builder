import { styled } from 'reakit';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #2196F3;
  border: 2px solid #2196F3;

  ${props => props.primary && css`
    background: #2196F3;
    color: #FFF;
  `}
`;

export { Button };