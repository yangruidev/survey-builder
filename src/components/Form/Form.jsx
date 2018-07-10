import './Form.scss';
import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div className='sb-form-wrapper'>
        <Form>
          <FormGroup row>
            <Col sm={12}>
              <Input type="text" name="name" id="name" placeholder="Add a survey name" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input type="select" name="category" id="category" placeholder="Select survey category"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Button block='true' color='success'>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
