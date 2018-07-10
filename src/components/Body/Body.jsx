//@flow
import React from 'react';
import { Button } from 'reactstrap';
import './Body.scss';
import Form from '../Form/Form.jsx';

type Props = {}

const Body = (props: Props) => {

  return (
    <div className='sb-container'>        
      <div className='sb-btn-wrapper'>
        <Button color='primary' block='true'>Start a new survey</Button>
      </div>
      <Form />
    </div>
  );
};

export default Body;