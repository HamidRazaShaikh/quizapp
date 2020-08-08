import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

export default function QuestionCard() {
  const { name, subject, level } = useParams();

  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h3> Welcome to quiz dear {name}!</h3>
          <h6  style = {{textAlign : 'left'}}>subject : {subject}</h6>
          <h6  style = {{ textAlign : 'right', marginTop : -20}}> level : {level}</h6>
        </Col>
      </Row>
    </Container>
  );
}
