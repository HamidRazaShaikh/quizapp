import React,{useState} from "react";
import { Container, Row, Col } from "reactstrap";
import {Link} from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import QuestionCard from './questioncard';

export default function UserInfo() {

  const [name , setName] = useState('');
  const [subject , setSubject] = useState('');
  const [level , setLevel] = useState('');


  // const setData = () => {

  //   setName ()
  // }
  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <h2 className="mt-5 pl-2 mb-5">Welcome to quiz-app!</h2>
        </Col>
      </Row>
      <Row>
        <Col xs = '12' lg = '6'>
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input
                name="name"            
                placeholder="Enter your name"
                value = {name}
                onChange = {(e)=> setName(e.target.value)}
            
              />
            </FormGroup>
            <FormGroup>
              <Label >subject</Label>
              <Input
                name="subject"
                placeholder="Enter subject"
                value = {subject}
                onChange = {(e)=> setSubject(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label >level</Label>
              <Input type = 'select' name="select" value = {level}
                onChange = {(e)=> setLevel(e.target.value)}>
                <option>Hard</option>
                <option>Medium</option>
                <option>Easy</option>
              </Input>
            </FormGroup>
            
<Link style = {{ color : 'white' ,textDecoration : 'none'}} to ={`/questionCard/${name}/${subject}/${level}`}><Button  className = 'd-flex align-items-center'>start quiz</Button></Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
