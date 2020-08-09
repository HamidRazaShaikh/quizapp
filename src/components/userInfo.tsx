import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { subjectNames } from "./../services/api";

type Props = {
  setRegistered: Function;
  setUser: Function;
};

type categoryType = {
  id: number;
  name: string;
};

const UserInfo: React.FC<Props> = ({ setRegistered, setUser }) => {
  useEffect(() => {
    const catagoriesList = async () => {
      setCategories(await subjectNames());
    };

    catagoriesList();
  }, []);

  const [values, setValues] = useState({
    name: "",
    category: "General Knowledge",
    level: "Easy",
  });

  const [categoires, setCategories] = useState<any[]>([]);

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = ( e : any) => {
    e.preventDefault();
    if(values.name){
      setRegistered(true);
      setUser(values)
    }
    else{
      alert('Please enter your name.')
    }



  }

  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <h2 className="mt-5 pl-2 mb-5">Welcome to quiz-app!</h2>
        </Col>
      </Row>
      <Row>
        <Col xs="12" lg="6">
          <Form onSubmit = {handleSubmit}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>category</Label>
              <Input type="select" name="category" onChange={handleChange}>
                {categoires.map((cat: categoryType, i) => {
                  console.log(cat);
                  return (
                    <option key={i} value={cat.name}>
                      {cat.name}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>level</Label>
              <Input type="select" name="level" onChange={handleChange}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </Input>
            </FormGroup>

            <Button type = 'submit' className="d-flex align-items-center">start quiz</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfo;
